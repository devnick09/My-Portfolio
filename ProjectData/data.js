import { v4 as uuidv4 } from "uuid";

export const AllProjects = [
  {
    id: uuidv4(),
    name: "Loopstudio landing page",
    description:
      "Loopstudio landing page built with react, scss and tiny bit of javascript.",
    tags: ["react", "scss"],
    live: "https://vr-loopstudios-landing-page.netlify.app/",
    github: "https://github.com/devVivekrao/loopstudios-landing-page",
    featured: true,
  },
  {
    id: uuidv4(),
    name: "Room home page",
    description:
      "Room home page built with html5, scss and tiny bit of javascript.",
    tags: ["html5", "scss", "javascript"],
    live: "https://vr-room-homepage.netlify.app/",
    github: "https://github.com/devVivekrao/room-homepage",
    featured: true,
  },
  {
    id: uuidv4(),
    name: "Simple social media app with authentication",
    description:
      "Simple social media app built with react, node, express and mongodb.",
    tags: ["react", "node", "mongo", "express"],
    live: "https://vr-social-media.netlify.app/",
    github: "https://github.com/devVivekrao/social-media-app",
    featured: true,
  },
];
