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
];
