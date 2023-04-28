import React, { useContext, useState } from "react";
import ColorPicker from "../Form/ColorPicker";
import { ThemeContext } from "@/contexts/ThemeContext";
import { ThemeContextType } from "@/types/contexts/theme-type";

const btnStyle = ["rounded-full", "rounded-md", "rounded-none"];
const ButtonForm = () => {
  const { theme, handleSetTheme } = useContext<ThemeContextType>(ThemeContext);
  const [backgroundButton, setBackgroundButton] = useState(
    theme?.colors.button
  );
  const [textColorButton, setTextColorButton] = useState(
    theme?.colors.text_button
  );

  const handleChangeColor = (name: string, value: string) => {
    handleSetTheme({
      ...theme,
      colors: {
        ...theme.colors,
        [name]: value,
      },
    });
  };

  const handleChangeRadius = (value: string) => {
    handleSetTheme({
      ...theme,
      attributes: {
        ...theme.attributes,
        button_radius: value,
      },
    });
  };

  return (
    <div className="w-full">
      <div className="flex space-x-5 mb-10">
        {btnStyle.map((val, i: number) => (
          <button
            key={i}
            className={`btn btn-primary ${val} flex-1 ${
              theme?.attributes?.button_radius === val &&
              "border-2  border-black"
            }`}
            onClick={() => handleChangeRadius(val)}
          >
            My Link
          </button>
        ))}
      </div>
      <div className="space-y-5">
        <ColorPicker
          label="Text Color"
          onChange={(e) => setTextColorButton(e.target.value)}
          onBlur={() => handleChangeColor("text_button", textColorButton)}
          value={theme?.colors.text_button}
        />
        <ColorPicker
          label="Background"
          onChange={(e) => setBackgroundButton(e.target.value)}
          onBlur={() => handleChangeColor("button", backgroundButton)}
          value={theme?.colors.button}
        />
      </div>
    </div>
  );
};

export default ButtonForm;
