(() => {
  const root = document.querySelector("[data-website-statistics]");

  if (!root) return;

  const websiteId = root.dataset.websiteId;
  const shareSlug = root.dataset.shareSlug;
  const apiUrl = root.dataset.apiUrl?.replace(/\/$/, "");
  const status = root.querySelector("[data-statistics-status]");
  const chart = root.querySelector("[data-statistics-chart]");
  const peak = root.querySelector("[data-statistics-peak]");
  const summary = root.querySelector("[data-statistics-summary]");
  const startDateLabel = root.querySelector("[data-statistics-start-date]");
  const endDateLabel = root.querySelector("[data-statistics-end-date]");
  const numberFormatter = new Intl.NumberFormat("en-US");
  const shortDateFormatter = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" });
  const dayKeyFormatter = new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const dayLength = 24 * 60 * 60 * 1000;

  const setMetric = (name, value) => {
    const element = root.querySelector(`[data-statistic="${name}"]`);
    if (element) element.textContent = value;
  };

  const fetchJson = async (url, options = {}) => {
    const response = await fetch(url, { cache: "no-store", ...options });
    if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
    return response.json();
  };

  const createSvgElement = (name, attributes = {}) => {
    const element = document.createElementNS("http://www.w3.org/2000/svg", name);
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    return element;
  };

  const renderChart = (series, startAt, endAt) => {
    const countsByDate = new Map((series || []).map((point) => [dayKeyFormatter.format(new Date(point.x)), Number(point.y) || 0]));
    const days = Array.from({ length: 30 }, (_, index) => {
      const date = new Date(endAt - (29 - index) * dayLength);
      return { date, value: countsByDate.get(dayKeyFormatter.format(date)) || 0 };
    });
    const values = days.map(({ value }) => value);
    const peakValue = Math.max(...values, 0);
    const scaleMax = Math.max(peakValue, 1);
    const total = values.reduce((sum, value) => sum + value, 0);
    const width = 720;
    const height = 164;
    const top = 12;
    const bottom = 148;
    const usableHeight = bottom - top;
    const xStep = width / (days.length - 1);
    const points = days.map(({ value }, index) => ({
      x: index * xStep,
      y: bottom - (value / scaleMax) * usableHeight,
      value,
    }));
    const linePath = points.map(({ x, y }, index) => `${index === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`).join(" ");
    const areaPath = `${linePath} L${width} ${bottom} L0 ${bottom} Z`;
    const svg = createSvgElement("svg", {
      viewBox: `0 0 ${width} ${height}`,
      role: "img",
      "aria-label": `${numberFormatter.format(total)} page views in the last 30 days, with a daily peak of ${numberFormatter.format(peakValue)}.`,
      preserveAspectRatio: "none",
    });
    const title = createSvgElement("title");
    title.textContent = "Daily page views over the last 30 days";
    svg.append(title);

    [top, top + usableHeight / 2, bottom].forEach((y) => {
      svg.append(createSvgElement("line", { x1: 0, y1: y, x2: width, y2: y, class: "website-statistics__grid-line" }));
    });
    svg.append(createSvgElement("path", { d: areaPath, class: "website-statistics__chart-area" }));
    svg.append(createSvgElement("path", { d: linePath, class: "website-statistics__chart-line" }));
    points
      .filter(({ value }) => value > 0)
      .forEach(({ x, y }) => {
        svg.append(createSvgElement("circle", { cx: x, cy: y, r: 3.25, class: "website-statistics__chart-point" }));
      });

    chart.replaceChildren(svg);
    peak.textContent = `Peak ${numberFormatter.format(peakValue)}`;
    summary.textContent = `${numberFormatter.format(total)} page views in the last 30 days. The busiest day recorded ${numberFormatter.format(peakValue)} views.`;
    startDateLabel.textContent = shortDateFormatter.format(new Date(startAt));
    endDateLabel.textContent = shortDateFormatter.format(new Date(endAt));
  };

  const showError = () => {
    root.classList.add("is-error");
    root.setAttribute("aria-busy", "false");
    status.textContent = "Live data temporarily unavailable";
    chart.replaceChildren();
    const message = document.createElement("p");
    message.className = "website-statistics__error-message";
    message.textContent = "The public dashboard is still available from the link below.";
    chart.append(message);
    peak.textContent = "Umami Cloud";
    summary.textContent = "Live website statistics are temporarily unavailable.";
  };

  const loadStatistics = async () => {
    if (!websiteId || !shareSlug || !apiUrl) {
      showError();
      return;
    }

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 10000);

    try {
      const share = await fetchJson(`${apiUrl}/share/${encodeURIComponent(shareSlug)}`, {
        signal: controller.signal,
      });

      if (!share.token || share.websiteId !== websiteId) throw new Error("Invalid public share response");

      const endAt = Date.now();
      const startAt = endAt - 30 * dayLength;
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
      const headers = {
        "x-umami-share-token": share.token,
        "x-umami-share-context": "1",
      };
      const statsParameters = new URLSearchParams({ startAt: String(startAt), endAt: String(endAt) });
      const chartParameters = new URLSearchParams({
        startAt: String(startAt),
        endAt: String(endAt),
        unit: "day",
        timezone,
      });
      const [stats, pageviews] = await Promise.all([
        fetchJson(`${apiUrl}/websites/${websiteId}/stats?${statsParameters}`, { headers, signal: controller.signal }),
        fetchJson(`${apiUrl}/websites/${websiteId}/pageviews?${chartParameters}`, { headers, signal: controller.signal }),
      ]);

      const visits = Number(stats.visits) || 0;
      const bounces = Number(stats.bounces) || 0;
      const bounceRate = visits ? `${Math.round((bounces / visits) * 100)}%` : "0%";

      setMetric("pageviews", numberFormatter.format(Number(stats.pageviews) || 0));
      setMetric("visitors", numberFormatter.format(Number(stats.visitors) || 0));
      setMetric("visits", numberFormatter.format(visits));
      setMetric("bounce-rate", bounceRate);
      renderChart(pageviews.pageviews, startAt, endAt);

      root.classList.add("is-ready");
      root.setAttribute("aria-busy", "false");
      status.textContent = "Live data updated now";
    } catch (error) {
      showError();
    } finally {
      window.clearTimeout(timeout);
    }
  };

  loadStatistics();
})();
