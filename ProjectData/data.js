import { v4 as uuidv4 } from "uuid";

export const AllProjects = [
  {
    id: uuidv4(),
    name: "Javascript Quiz Game",
    description: "Javascript Quiz Game built with vanilla Javascript.",
    tags: ["react", "scss"],
    live: "https://quizee-game.vercel.app/",
    github: "https://github.com/devnick09/Javascript-Quiz-game",
    image: "/assets/Quizee.png",
    featured: true,
  },
  {
    id: uuidv4(),
    name: "Cryptonium",
    description:
      "Crypto currency tracker app built with Next js and styled components.",
    tags: ["react", "node", "mongo", "express"],
    live: "https://crypto-nium.vercel.app/",
    github: "https://github.com/devnick09/Cryptonium",
    image: "/assets/crypto.png",
    featured: true,
  },
  {
    id: uuidv4(),
    name: "Dashboard UI",
    description: "Dashboard UI built with Next js and Tailwind CSS.",
    tags: ["react", "node", "mongo", "express"],
    live: "https://nextjs-dashboard-ui.vercel.app/",
    github: "https://github.com/devnick09/Nextjs-Dashboard-UI",
    image: "/assets/Dashboard.png",
    featured: true,
  },
  {
    id: uuidv4(),
    name: "Discord UI Clone",
    description: "Discord UI Clone built with React js and Tailwind CSS.",
    tags: ["react", "node", "mongo", "express"],
    live: "https://discord-clone-chat.vercel.app/",
    github: "https://github.com/devnick09/Discord-UI-Clone",
    image: "/assets/Discord.png",
    featured: true,
  },
];
