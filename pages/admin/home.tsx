import PreviewContent from "@/components/PreviewContent";
import React, { ReactElement } from "react";

const Home = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-white">
      <PreviewContent />
    </div>
  );
};

Home.getLayout = function (page: ReactElement) {
  return <div>{page}</div>;
};

export default Home;
