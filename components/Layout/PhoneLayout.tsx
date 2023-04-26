import React, { PropsWithChildren } from "react";

const PhoneLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="mockup-phone">
      <div className="camera"></div>
      <div className="display">
        <div
          className={`artboard artboard-demo phone-1 overflow-y-auto items-start justify-start  `}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default PhoneLayout;
