import React, { useContext, useState } from "react";
import Image from "next/image";
import { ThemeContext } from "@/contexts/ThemeContext";
import { ThemeContextType } from "@/types/contexts/theme-type";
import ColorPicker from "../Form/ColorPicker";

const mask = [
  "mask-squircle",
  "mask-circle",
  "mask-square rounded-lg",
  "mask-decagon",
  "mask-parallelogram",
];
const AvatarForm = () => {
  const { theme, handleSetTheme } = useContext<ThemeContextType>(ThemeContext);
  const [color, setColor] = useState(theme?.colors.title);

  const setAvatarMask = (mask: string) => {
    handleSetTheme({
      ...theme,
      attributes: {
        ...theme.attributes,
        avatar_mask: mask,
      },
    });
  };

  const handleChangeColor = () => {
    handleSetTheme({
      ...theme,
      colors: {
        ...theme.colors,
        title: color,
      },
    });
  };

  return (
    <div>
      <div className="flex lg:justify-between flex-wrap mb-10">
        {mask.map((val, i) => (
          <div
            key={i}
            onClick={() => setAvatarMask(val)}
            className={` p-2 rounded-md cursor-pointer ${
              theme?.attributes.avatar_mask == val && "border-2 border-black"
            }`}
          >
            <div className={`w-20 mask ${val}`}>
              <Image
                src="https://res.cloudinary.com/cv-abdi-creative/image/upload/v1682380030/next-tree/avatar_ymrwu1.webp"
                height={150}
                width={150}
                alt="Profile"
              />
            </div>
          </div>
        ))}
      </div>
      <ColorPicker
        label="Text Color"
        value={theme?.colors.title ?? "#00000"}
        onChange={(e) => setColor(e.target.value)}
        onBlur={handleChangeColor}
      />
    </div>
  );
};

export default AvatarForm;
