import { ThemeContext } from "@/contexts/ThemeContext";
import { ThemeContextType } from "@/types/contexts/theme-type";
import React, { useContext } from "react";

const FlatColor = () => {
  const { theme } = useContext<ThemeContextType>(ThemeContext);
  return (
    <div className="space-y-5">
      <h4 className="font-semibold">Flat Color</h4>
      <div className="flex items-center space-x-3">
        <input
          type="color"
          className=" px-0 py-0 h-14 w-16"
          value={theme.colors.bg}
          onChange={() => null}
        />
        <input
          type="text"
          className="form-control"
          onChange={() => null}
          placeholder="bg-primary"
          value={theme.colors.bg}
        />
      </div>
    </div>
  );
};

export default FlatColor;
