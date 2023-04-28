/* eslint-disable react-hooks/exhaustive-deps */
import ColorPicker from "@/components/Form/ColorPicker";
import { ThemeContext } from "@/contexts/ThemeContext";
import { ThemeContextType } from "@/types/contexts/theme-type";
import React, { useContext, useState, useEffect } from "react";

const LinearColor = () => {
  const { theme, handleSetTheme } = useContext<ThemeContextType>(ThemeContext);

  const getColor = (index: number) => {
    if (theme.colors.background.includes("linear-gradient")) {
      const color = theme.colors.background.split(",")[index];
      return color;
    }
    return theme.colors.background;
  };

  const [firstColor, setFirstColor] = useState(getColor(0));
  const [secondColor, setSecondColor] = useState(getColor(1));

  const changeBackgroundLinear = () => {
    handleSetTheme({
      ...theme,
      colors: {
        ...theme.colors,
        background: `linear-gradient(${firstColor} ,${secondColor})`,
      },
    });
  };
  return (
    <div className="space-y-5">
      <ColorPicker
        value={firstColor ?? "#ffffff"}
        onChange={(e) => setFirstColor(e.target.value)}
        label="Color Top"
        onBlur={changeBackgroundLinear}
      />
      <ColorPicker
        value={secondColor ?? "#ffffff"}
        onChange={(e) => setSecondColor(e.target.value)}
        label="Color Bottom"
        onBlur={changeBackgroundLinear}
      />
    </div>
  );
};

export default LinearColor;
