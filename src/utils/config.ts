import image1 from "@/assets/building.jpg"
import image2 from "@/assets/image.jpg"
import image3 from "@/assets/building.jpg"

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
    content: "Founders expanding investor and partnership reach.",
    image: image1.src
  },
  {
    title: "Sales",
    content: "Sales teams refining outreach precision and follow-up strategy",
    image: image2.src
  },
  {
    title: "Applicants",
    content: "Applicants turning rejection into insight and momentum.",
    image: image3.src
  },
]