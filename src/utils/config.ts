import image1 from "@/assets/building.jpg"
import image2 from "@/assets/image.jpg"
import image3 from "@/assets/applicant.jpg"

export enum Config {
  domain = "https://shot-count.vercel.app/",
  description = "ShotCount helps you take more shots, learn from rejection, and grow your confidence with AI-powered insights.",
  title = "ShotCount",
}



export const APPCONFIG = {
  APP_URL: {
    PLAY_STORE: "https://google.com",
    APP_STORE: "https://google.com",
  },
  SOCIALS: {
    twitter: "https://www.x.com",
    LINKEDIN: "https://www.linkedin.com",
    INSTAGRAM: "https://www.instagram.com",
  },
};

export const Tabs = [
  {
    title: "Founders",
    content: "More investors reach. Better follow ups. Faster wins.",
    image: image1.src
  },
  {
    title: "Sales",
    content: "Higher volume. Better timing. Clearer messages.",
    image: image2.src
  },
  {
    title: "Applicants",
    content: "Do more with ease. Get interviews. Get offers.",
    image: image3.src
  },
]