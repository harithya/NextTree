import ColorPicker from "@/components/Form/ColorPicker";
import { ThemeContext } from "@/contexts/ThemeContext";
import { ThemeContextType } from "@/types/contexts/theme-type";
import React, { useContext } from "react";

const FlatColor = () => {
  const { theme } = useContext<ThemeContextType>(ThemeContext);
  return (
    <div>
      <ColorPicker
        label={"Flat Color"}
        value={theme.colors.bg}
        onChange={() => null}
      />
    </div>
  );
};

export default FlatColor;
