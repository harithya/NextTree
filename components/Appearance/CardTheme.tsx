import React, { useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "@/contexts/ThemeContext";
import {
  ITheme,
  ThemeAction,
  ThemeContextType,
} from "@/types/contexts/theme-type";

interface Props extends ITheme {
  img: string;
}
const CardTheme: React.FC<Props> = ({ name, img, colors }) => {
  const { theme, dispatch }: ThemeContextType = useContext(ThemeContext);

  const handleChangeTheme = () => {
    const payload = {
      name: name.toLocaleLowerCase(),
      colors: colors,
    };

    localStorage.setItem("theme", JSON.stringify(payload));
    dispatch({
      type: ThemeAction.SET_THEME,
      payload: payload,
    });
  };

  return (
    <div
      className="hover:scale-95 transition-all cursor-pointer"
      onClick={handleChangeTheme}
    >
      <div
        className={`h-42 w-full border rounded-lg ${
          theme.name === name.toLocaleLowerCase()
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
      <h4 className="text-center mt-3">{name}</h4>
    </div>
  );
};

export default CardTheme;
