import { animate, stagger } from "motion";

export function toggleMobileNav(navSelector, listSelector, action) {
  const nav = document.querySelector(navSelector);
  const links = document.querySelectorAll(listSelector);
  if (!nav) return;

  if (action === "open") {
    nav.classList.remove("hidden");
    nav.getBoundingClientRect();
    body.style.overflow = "hidden";
    animate(
      nav,
      { y: ["-100%", "0%"], opacity: [0, 1] },
      { duration: 0.4, easing: "ease-out" }
    );

    if (links.length) {
      animate(
        links,
        { opacity: [0, 1], y: [20, 0] },
        { delay: stagger(0.05, { start: 0.1 }), duration: 0.3 }
      );
    }
  }

  if (action === "close") {
    animate(
      nav,
      { y: ["0%", "-100%"], opacity: [1, 0] },
      { duration: 0.3, easing: "ease-in" }
    ).finished.then(() => {
      nav.classList.add("hidden");
      body.style.overflow = "";
    });
  }
}
