import { animate, stagger } from "motion";

export function setupFAQ() {
  const items = document.querySelectorAll(".faq-item");

  items.forEach((item) => {
    const icon = item.querySelector(".faq-icon");
    const answer = item.querySelector(".faq-answer");

    item.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");

      // Close all
      items.forEach((el) => {
        el.classList.remove("open");
        const ans = el.querySelector(".faq-answer");
        const ico = el.querySelector(".faq-icon");

        animate(ans, { opacity: 0, maxHeight: 0, marginTop: 0 }, { duration: 0.3 });
        animate(ico, { rotate: 0 }, { duration: 0.25 });
      });

      // Open this one
      if (!isOpen) {
        item.classList.add("open");

        const fullHeight = answer.scrollHeight + "px";

        animate(
          answer,
          { opacity: 1, maxHeight: fullHeight, marginTop: 12 },
          { duration: 0.45, easing: "ease-out" }
        );

        animate(icon, { rotate: 45 }, { duration: 0.25 });
      }
    });
  });
}
