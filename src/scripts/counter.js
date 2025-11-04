import { animate } from "motion";

const formatter = new Intl.NumberFormat("en-US");

export function setupCounter() {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-target"), 10);

    animate(0, target, {
      duration: 3,
      easing: "ease-out",
      onUpdate(value) {
        counter.textContent = formatter.format(Math.floor(value));
      },
    });
  });
}

export function animateCards() {
  if (window.innerWidth < 768) return;

  const shotsCard = document.querySelector(".shots-card");
  const microsoftCard = document.querySelector(".microsoft-card");
   const smoothEase = "cubic-bezier(0.36, 0, 0.64, 1)";

  // --- Shots card (left → right swing on X) ---
  if (shotsCard) {
    // entrance: slide in from left to 0
    animate(
      shotsCard,
      { x: ["-120%", "0%"], opacity: [0, 1] },
      { duration: 0.8, easing: "ease-out" }
    ).finished.then(() => {
      // continuous pendulum-like horizontal movement around x = 0
      animate(
        shotsCard,
        { x: [0, 30, -30, 30] },
        {
          duration: 5,
          loop: true,
          repeat: Infinity,
          repeatType: "reverse",
          easing: smoothEase,
          iterations: Infinity,
        }
      );
    });
  }

  if (microsoftCard) {
    animate(
      microsoftCard,
      { x: ["120%", "0%"], opacity: [0, 1] },
      { duration: 0.8, delay: 0.15, easing: "ease-out" }
    ).finished.then(() => {
      animate(
        microsoftCard,
        { x: [0, -30, 30, -30] },
        {
          duration: 5.2, 
          easing: smoothEase,
             loop: true,
          repeat: Infinity,
          repeatType: "reverse",
          iterations: Infinity,
        }
      );
    });
  }
}
