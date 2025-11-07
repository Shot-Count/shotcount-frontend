import { animate } from "motion";
import { Tabs } from "@/utils/config";

export function TabSwitcher() {
  const tabItems = document.querySelectorAll(".tab-item");
  const title = document.getElementById("section-title");
  const sectionImage = document.querySelector("#section-image");
  const selector = document.querySelector("#selector");
  const parent = selector?.parentElement;

  if (!tabItems.length || !selector || !title || !sectionImage || !parent) return;

  const parentRect = parent.getBoundingClientRect();
  const initialRect = tabItems[0].getBoundingClientRect();

  selector.style.left = initialRect.left - parentRect.left + "px";
  selector.style.width = initialRect.width + "px";
  title.textContent = Tabs[0].content;
  sectionImage.src = Tabs[0].image;
  
  tabItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      const rect = item.getBoundingClientRect();

      animate(
        selector,
        {
          left: rect.left - parentRect.left + "px",
          width: rect.width + "px",
        },
        {
          duration: 0.3,
          easing: "ease-out",
        }
      );

      const fadeOutTitle = animate(title, { opacity: [1, 0] }, { duration: 0.2 });
      const fadeOutImage = animate(sectionImage, { opacity: [1, 0] }, { duration: 0.2 });
      
      Promise.all([fadeOutTitle.finished, fadeOutImage.finished]).then(() => {
          title.textContent = Tabs[index].content;
          sectionImage.src = Tabs[index].image;
          sectionImage.alt = Tabs[index].title+"_image"

        // Fade both back in
        animate([title, sectionImage], { opacity: [0, 1] }, { duration: 0.3 });
      });
    });
  });
}
