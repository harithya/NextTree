import React, { useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "@/contexts/ThemeContext";

interface Props {
  name: string;
  img: string;
}
const CardTheme: React.FC<Props> = ({ name, img }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChangeTheme = () => {
    const theme = name.toLowerCase();
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };

  return (
    <div
      className="hover:scale-95 transition-all cursor-pointer"
      onClick={handleChangeTheme}
    >
      <div
        className={`h-42 w-full border rounded-lg ${
          theme === name.toLocaleLowerCase()
            ? " border-2 border-primary-content"
            : ""
        } `}
      >
        <div>
          <Image
            unoptimized
            src={img}
            className="rounded-lg"
            alt="Theme"
            width={300}
            height={300}
          />
        </div>
      </div>
      <h4 className="text-center mt-3 font-semibold">{name}</h4>
    </div>
  );
};

export default CardTheme;
