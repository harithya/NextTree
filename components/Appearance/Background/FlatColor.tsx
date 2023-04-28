import ColorPicker from "@/components/Form/ColorPicker";
import { ThemeContext } from "@/contexts/ThemeContext";
import { ThemeContextType } from "@/types/contexts/theme-type";
import React, { useContext, useState } from "react";

const FlatColor = () => {
  const { theme, handleSetTheme } = useContext<ThemeContextType>(ThemeContext);
  const [bg, setBg] = useState(theme?.colors.background);

  const handleTheme = () => {
    handleSetTheme({
      ...theme,
      colors: {
        ...theme?.colors,
        background: bg,
      },
    });
  };

  return (
    <div>
      <ColorPicker
        label={"Flat Color"}
        value={theme?.colors.background ?? "#ffffff"}
        onChange={(e) => setBg(e.target.value)}
        onBlur={handleTheme}
      />
    </div>
  );
};

export default FlatColor;
