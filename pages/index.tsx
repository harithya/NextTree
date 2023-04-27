import PreviewContent from "@/components/PreviewContent";
import React from "react";

const Home = () => {
  return (
    <div>
      <PreviewContent />
    </div>
  );
};

Home.getLayout = (page: any) => {
  return page;
};

export default Home;
