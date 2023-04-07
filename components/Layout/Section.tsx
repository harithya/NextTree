import React, { PropsWithChildren } from "react";

interface Props {
  title?: string;
}
const Section: React.FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <div>
      <h1 className="font-bold text-xl mb-5">{title}</h1>
      {children}
    </div>
  );
};

export default Section;
