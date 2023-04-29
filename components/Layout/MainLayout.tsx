import dynamic from "next/dynamic";
import React, { PropsWithChildren } from "react";

const Header = dynamic(() => import("../Layout/_Partials/Header"), {
  loading: () => <p>Loading...</p>,
});

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full">
      <Header />
      <div className="container-fluid pb-24">
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
