import { STORAGE } from "./constant";

const helper = {
  getAvatar: (url: string | null | undefined) => {
    if (url) return url;
    return "https://res.cloudinary.com/cv-abdi-creative/image/upload/v1682380030/next-tree/avatar_ymrwu1.webp";
  },
};

export default helper;
