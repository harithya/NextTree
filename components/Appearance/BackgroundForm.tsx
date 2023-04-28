import { listBackground } from "@/pages/api/dummy";
import React, { useContext } from "react";
import FlatColor from "./Background/FlatColor";
import { ThemeContext } from "@/contexts/ThemeContext";
import { ThemeContextType } from "@/types/contexts/theme-type";
import LinearColor from "./Background/LinearColor";
import BgImage from "./Background/BgImage";

const BackgroundForm = () => {
  const { theme, handleSetTheme } = useContext<ThemeContextType>(ThemeContext);

  const renderForm = () => {
    if (theme?.bg == undefined || theme?.bg == "flat") {
      return <FlatColor />;
    }
    if (theme?.bg == "gradient") {
      return <LinearColor />;
    }
    if (theme?.bg == "image") {
      return <BgImage />;
    }
  };

  const handleTheme = (name: string) => {
    handleSetTheme({
      ...theme,
      bg: name,
    });
  };

  const isActive = (name: string) => {
    if (theme?.bg == name) {
      return "border-2 border-black";
    }

    if (theme?.bg == undefined && name == "flat") {
      return "border-2 border-black";
    }
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-5 mb-10">
        {listBackground.map((val, i) => (
          <div key={i} onClick={() => handleTheme(val.id)}>
            <div
              className={`w-full h-48 hover:scale-95 transition-all cursor-pointer rounded-lg border flex justify-center items-center ${
                val.className
              } ${isActive(val.id)}`}
            >
              {val.childClassName && (
                <div
                  className={`h-8 w-8 bg-contain bg-no-repeat ${val.childClassName}`}
                />
              )}
            </div>
            <h4 className="text-center mt-3 ">{val.name}</h4>
          </div>
        ))}
      </div>
      {renderForm()}
    </div>
  );
};

export default BackgroundForm;
