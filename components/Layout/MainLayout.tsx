import React, { PropsWithChildren } from "react";
import Header from "./_Partials/Header";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full">
      <Header />
      <div className="container pb-24">
        <div className="mt-16">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
