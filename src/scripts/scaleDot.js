import { animate, stagger } from "motion";

export function Scaler() {
  const dots = document.querySelectorAll("#shot-dots li");
  animate(
    dots,
    { scale: [0.5, 1, 0.5] },
    {
      duration: 2,
      delay: stagger(0.30),
      repeat: Infinity,
      easing: "ease-in-out",
    }
  );
}
