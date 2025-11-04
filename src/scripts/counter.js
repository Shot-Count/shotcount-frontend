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


