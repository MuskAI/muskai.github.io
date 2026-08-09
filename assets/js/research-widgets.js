(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const initProfileEasterEgg = () => {
    const profile = document.querySelector("[data-profile-easter-egg]");
    if (!profile) return;

    const toggle = () => {
      const active = profile.classList.toggle("is-active");
      profile.setAttribute("aria-pressed", String(active));
    };

    profile.addEventListener("click", toggle);
    profile.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggle();
      }
    });
  };

  const resetChallenge = (challenge) => {
    challenge.removeAttribute("data-answered");
    challenge.querySelectorAll("[data-challenge-choice]").forEach((choice) => {
      choice.classList.remove("is-ai-answer", "is-wrong");
      choice.setAttribute("aria-pressed", "false");
      choice.disabled = false;
    });
    const feedback = challenge.querySelector("[data-challenge-feedback]");
    if (feedback) {
      feedback.classList.remove("is-revealed");
      feedback.textContent = "Select one image to reveal the answer.";
    }
  };

  const initChallenges = () => {
    document.querySelectorAll("[data-daily-challenge]").forEach((challenge) => {
      challenge.querySelectorAll("[data-challenge-choice]").forEach((choice) => {
        choice.setAttribute("aria-pressed", "false");
        choice.addEventListener("click", () => {
          if (challenge.hasAttribute("data-answered")) return;
          challenge.setAttribute("data-answered", "true");

          const selectedIsAI = choice.dataset.isAi === "true";
          const clue = challenge.dataset.clue || "Inspect fine boundaries, repeated details, geometry, and reflections.";
          const feedback = challenge.querySelector("[data-challenge-feedback]");

          challenge.querySelectorAll("[data-challenge-choice]").forEach((candidate) => {
            const candidateIsAI = candidate.dataset.isAi === "true";
            candidate.disabled = true;
            candidate.setAttribute("aria-pressed", String(candidate === choice));
            if (candidateIsAI) candidate.classList.add("is-ai-answer");
            if (candidate === choice && !candidateIsAI) candidate.classList.add("is-wrong");
          });

          if (feedback) {
            feedback.textContent = `${selectedIsAI ? "Correct." : "Not quite."} ${clue}`;
            feedback.classList.add("is-revealed");
          }
        });
      });
    });

    document.querySelectorAll("[data-challenge-carousel]").forEach((carousel) => {
      const rounds = Array.from(carousel.querySelectorAll("[data-challenge-round]"));
      const next = carousel.querySelector("[data-challenge-next]");
      if (!rounds.length || !next) return;
      let current = 0;

      next.addEventListener("click", () => {
        rounds[current].classList.add("is-hidden");
        current = (current + 1) % rounds.length;
        resetChallenge(rounds[current]);
        rounds[current].classList.remove("is-hidden");
        rounds[current].querySelector("[data-challenge-choice]")?.focus();
      });
    });
  };

  const initPaperRoulette = () => {
    document.querySelectorAll("[data-paper-roulette]").forEach((roulette) => {
      const cards = Array.from(roulette.querySelectorAll("[data-paper-card]"));
      const trigger = roulette.querySelector("[data-paper-roulette-trigger]");
      if (cards.length < 2 || !trigger) return;
      let current = 0;

      trigger.addEventListener("click", () => {
        let next = current;
        while (next === current) next = Math.floor(Math.random() * cards.length);
        cards[current].classList.add("is-hidden");
        cards[next].classList.add("is-entering");
        cards[next].classList.remove("is-hidden");
        if (reducedMotion) {
          cards[next].classList.remove("is-entering");
        } else {
          requestAnimationFrame(() => cards[next].classList.remove("is-entering"));
        }
        current = next;
      });
    });
  };

  const initAskResearch = () => {
    document.querySelectorAll("[data-ask-research]").forEach((widget) => {
      const questions = Array.from(widget.querySelectorAll("[data-question-target]"));
      const answers = Array.from(widget.querySelectorAll("[data-research-answer]"));

      questions.forEach((question) => {
        question.addEventListener("click", () => {
          const target = question.dataset.questionTarget;
          questions.forEach((item) => {
            const active = item === question;
            item.classList.toggle("is-active", active);
            item.setAttribute("aria-pressed", String(active));
          });
          answers.forEach((answer) => answer.classList.toggle("is-hidden", answer.id !== target));
        });
      });
    });
  };

  const initFeatureModel = () => {
    document.querySelectorAll("[data-feature-model]").forEach((model) => {
      const viewport = model.querySelector("[data-model-viewport]");
      const scene = model.querySelector("[data-model-scene]");
      const range = model.querySelector("[data-layer-range]");
      const output = model.querySelector("[data-layer-explanation]");
      const layers = Array.from(model.querySelectorAll("[data-model-layer]"));
      if (!viewport || !scene || !range || !output) return;

      const explanations = {
        1: "Layer 1 retains edges, color changes, and fine spatial structure.",
        2: "Layer 2 begins grouping local patterns while preserving precise detail.",
        3: "Layer 3 balances local visual detail with emerging semantic structure.",
        4: "Layer 4 carries stronger object-level patterns with less raw texture.",
        5: "Layer 5 emphasizes semantic concepts while compressing some spatial evidence.",
        6: "Layer 6 is closest to the encoder objective and may discard details the language model still needs.",
      };

      const selectLayer = () => {
        const selected = Number(range.value);
        layers.forEach((layer) => layer.classList.toggle("is-selected", Number(layer.dataset.modelLayer) === selected));
        output.textContent = explanations[selected];
      };

      let rotationX = -14;
      let rotationY = 28;
      let pointer = null;
      let previousX = 0;
      let previousY = 0;

      const renderRotation = () => {
        scene.style.setProperty("--model-rotate-x", `${rotationX}deg`);
        scene.style.setProperty("--model-rotate-y", `${rotationY}deg`);
      };

      viewport.addEventListener("pointerdown", (event) => {
        pointer = event.pointerId;
        previousX = event.clientX;
        previousY = event.clientY;
        viewport.setPointerCapture(pointer);
      });

      viewport.addEventListener("pointermove", (event) => {
        if (event.pointerId !== pointer) return;
        rotationY += (event.clientX - previousX) * 0.45;
        rotationX = Math.max(-55, Math.min(35, rotationX - (event.clientY - previousY) * 0.35));
        previousX = event.clientX;
        previousY = event.clientY;
        renderRotation();
      });

      const releasePointer = (event) => {
        if (event.pointerId === pointer) pointer = null;
      };
      viewport.addEventListener("pointerup", releasePointer);
      viewport.addEventListener("pointercancel", releasePointer);
      viewport.addEventListener("keydown", (event) => {
        const keys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];
        if (!keys.includes(event.key)) return;
        event.preventDefault();
        if (event.key === "ArrowLeft") rotationY -= 8;
        if (event.key === "ArrowRight") rotationY += 8;
        if (event.key === "ArrowUp") rotationX -= 6;
        if (event.key === "ArrowDown") rotationX += 6;
        renderRotation();
      });

      range.addEventListener("input", selectLayer);
      selectLayer();
      renderRotation();
    });
  };

  const initConstellation = () => {
    const container = document.querySelector("#research-constellation");
    if (!container || typeof window.d3 === "undefined") return;

    const nodes = [
      { id: "haoran", label: "Haoran Chen", type: "root" },
      { id: "mllm", label: "Multimodal LLMs", type: "topic" },
      { id: "layers", label: "Visual layers", type: "topic" },
      { id: "fusion", label: "Feature fusion", type: "topic" },
      { id: "connectors", label: "Connectors", type: "topic" },
      { id: "detection", label: "AIGC detection", type: "topic" },
      { id: "shallower", label: "Look Shallower", type: "paper", href: "/projects/visual-layer-selection/" },
      { id: "multilayer", label: "Multi-Layer Fusion", type: "paper", href: "/projects/multi-layer-feature-fusion/" },
      { id: "preserve", label: "Preserve or Compress", type: "paper", href: "/projects/connector-selection/" },
      { id: "huijian", label: "慧鉴AI", type: "project", href: "/projects/huijian-ai/" },
      { id: "wuming", label: "无铭AI", type: "project", href: "/projects/wuming-ai/" },
      { id: "expert", label: "企管星", type: "project", href: "/projects/expert-agent/" },
    ];

    const links = [
      ["haoran", "mllm"],
      ["haoran", "detection"],
      ["haoran", "wuming"],
      ["haoran", "expert"],
      ["mllm", "layers"],
      ["mllm", "fusion"],
      ["mllm", "connectors"],
      ["layers", "shallower"],
      ["fusion", "multilayer"],
      ["connectors", "preserve"],
      ["detection", "huijian"],
      ["detection", "wuming"],
      ["expert", "mllm"],
    ].map(([source, target]) => ({ source, target }));

    const height = window.innerWidth < 768 ? 432 : 496;
    const width = Math.max(container.clientWidth, 320);
    container.innerHTML = "";

    const svg = window.d3.select(container).append("svg").attr("viewBox", `0 0 ${width} ${height}`);
    const link = svg.append("g").selectAll("line").data(links).join("line").attr("class", "constellation-link");

    const node = svg
      .append("g")
      .selectAll("g")
      .data(nodes)
      .join("g")
      .attr("class", (item) => `constellation-node node-${item.type}`)
      .attr("tabindex", (item) => (item.href ? 0 : -1))
      .attr("role", (item) => (item.href ? "link" : "img"))
      .attr("aria-label", (item) => item.label);

    node.append("circle").attr("r", (item) => (item.type === "root" ? 16 : item.type === "topic" ? 11 : 8));
    node
      .append("text")
      .attr("text-anchor", "middle")
      .attr("y", (item) => (item.type === "root" ? 34 : 27))
      .text((item) => item.label);

    const connected = (source, target) =>
      links.some((edge) => {
        const edgeSource = typeof edge.source === "object" ? edge.source.id : edge.source;
        const edgeTarget = typeof edge.target === "object" ? edge.target.id : edge.target;
        return (edgeSource === source && edgeTarget === target) || (edgeSource === target && edgeTarget === source);
      });

    const highlight = (_, active) => {
      node.classed("is-muted", (item) => item.id !== active.id && !connected(item.id, active.id));
      link
        .classed("is-muted", (edge) => edge.source.id !== active.id && edge.target.id !== active.id)
        .classed("is-highlighted", (edge) => edge.source.id === active.id || edge.target.id === active.id);
    };

    const clearHighlight = () => {
      node.classed("is-muted", false);
      link.classed("is-muted", false).classed("is-highlighted", false);
    };

    const openNode = (_, item) => {
      if (!item.href) return;
      window.location.href = item.href;
    };

    node
      .on("mouseenter", highlight)
      .on("mouseleave", clearHighlight)
      .on("focus", highlight)
      .on("blur", clearHighlight)
      .on("click", openNode)
      .on("keydown", (event, item) => {
        if (event.key === "Enter") openNode(event, item);
      });

    const simulation = window.d3
      .forceSimulation(nodes)
      .force(
        "link",
        window.d3
          .forceLink(links)
          .id((item) => item.id)
          .distance((edge) => (edge.source.type === "root" ? 100 : 82))
      )
      .force("charge", window.d3.forceManyBody().strength(-310))
      .force("center", window.d3.forceCenter(width / 2, height / 2))
      .force(
        "collision",
        window.d3.forceCollide().radius((item) => (item.type === "root" ? 54 : 40))
      )
      .on("tick", () => {
        const padding = 45;
        nodes.forEach((item) => {
          item.x = Math.max(padding, Math.min(width - padding, item.x));
          item.y = Math.max(padding, Math.min(height - padding, item.y));
        });
        link
          .attr("x1", (edge) => edge.source.x)
          .attr("y1", (edge) => edge.source.y)
          .attr("x2", (edge) => edge.target.x)
          .attr("y2", (edge) => edge.target.y);
        node.attr("transform", (item) => `translate(${item.x},${item.y})`);
      });

    if (!reducedMotion) {
      const drag = window.d3
        .drag()
        .on("start", (event) => {
          if (!event.active) simulation.alphaTarget(0.22).restart();
          event.subject.fx = event.subject.x;
          event.subject.fy = event.subject.y;
        })
        .on("drag", (event) => {
          event.subject.fx = event.x;
          event.subject.fy = event.y;
        })
        .on("end", (event) => {
          if (!event.active) simulation.alphaTarget(0);
          event.subject.fx = null;
          event.subject.fy = null;
        });
      node.call(drag);
    } else {
      simulation.tick(240).stop();
    }
  };

  const init = () => {
    initProfileEasterEgg();
    initChallenges();
    initPaperRoulette();
    initAskResearch();
    initFeatureModel();
    initConstellation();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
