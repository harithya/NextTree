import { ThemeContext } from "@/contexts/ThemeContext";
import React, { PropsWithChildren, useContext } from "react";

const PhoneLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="mockup-phone">
      <div className="camera"></div>
      <div className="display">
        <div
          data-theme={theme}
          className="artboard artboard-demo phone-1 overflow-y-auto items-start justify-start py-20"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default PhoneLayout;
