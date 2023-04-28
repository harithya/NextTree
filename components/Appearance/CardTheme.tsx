import React, { useContext } from "react";
import Image from "next/image";
import { ThemeResult } from "@/types/api";
import { ThemeContext } from "@/contexts/ThemeContext";
import { ThemeContextType } from "@/types/contexts/theme-type";

const CardTheme: React.FC<ThemeResult> = (props) => {
  const { theme, handleSetTheme } = useContext<ThemeContextType>(ThemeContext);
  const { name, image } = props;

  return (
    <div
      className="hover:scale-95 transition-all cursor-pointer"
      onClick={() => handleSetTheme(props)}
    >
      <div
        className={`h-42 w-full border rounded-lg ${
          theme?.name === name && "border-2 border-black"
        }`}
      >
        <div>
          <Image
            unoptimized
            src={image}
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
