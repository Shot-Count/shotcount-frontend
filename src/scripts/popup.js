import { animate } from "motion";

const body = document.body;

export function togglePopup(containerSelector, contentSelector, action) {
  const container = document.querySelector(containerSelector);
  const content = document.querySelector(contentSelector);

  if (!container || !content) return;

  if (action === "open") {
    container.classList.remove("hidden");
    container.classList.add("flex-center");
    body.style.overflow = "hidden";
    animate(
      container,
      { opacity: [0, 1] },
      { duration: 0.3, easing: "ease-out" }
    );
    animate(
      content,
      { scale: [0.9, 1], opacity: [0, 1] },
      { duration: 0.4, delay: 0.05 }
    );
  }

  if (action === "close") {
    animate(content, { scale: [1, 0.9], opacity: [1, 0] }, { duration: 0.3 });

    animate(container, { opacity: [1, 0] }, { duration: 0.3 }).finished.then(
      () => {
        container.classList.remove("flex-center");
        body.style.overflow = "";
        container.classList.add("hidden");
      }
    );
  }
}
