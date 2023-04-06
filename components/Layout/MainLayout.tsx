import React, { PropsWithChildren } from "react";
import Header from "./_Partials/Header";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container lg:py-10">{children}</div>
    </div>
  );
};

export default MainLayout;
