(() => {
  const initPaperRoulette = () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPaperRoulette, { once: true });
  } else {
    initPaperRoulette();
  }
})();
