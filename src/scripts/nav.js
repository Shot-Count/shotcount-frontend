export function toggleMobileNav(navSelector, listSelector, action) {
  const nav = document.querySelector(navSelector)
  const links = document.querySelectorAll(listSelector)
  if (!nav) return

  if (action === "open") {
    nav.classList.remove("hidden")

    // Slide down and fade in
    animate(nav, { y: ["-100%", "0%"], opacity: [0, 1] }, { duration: 0.4, easing: "ease-out" })

    // Stagger the menu items
    if (links.length) {
      animate(
        links,
        { opacity: [0, 1], y: [20, 0] },
        { delay: stagger(0.05, { start: 0.1 }), duration: 0.3 }
      )
    }
  }

  if (action === "close") {
    // Slide up and fade out
    animate(nav, { y: ["0%", "-100%"], opacity: [1, 0] }, { duration: 0.3, easing: "ease-in" })
      .finished.then(() => nav.classList.add("hidden"))
  }
}