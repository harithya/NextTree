import React, { PropsWithChildren } from "react";
import MainLayout from "./MainLayout";

interface Props {
  title?: string;
}
const EditorLayout: React.FC<PropsWithChildren<Props>> = ({
  children,
  title,
}) => {
  return (
    <MainLayout>
      <div className="flex space-x-10">
        <div className="lg:w-8/12">
          <div className="mb-10">
            <h3 className="text-2xl font-semibold">{title}</h3>
          </div>
          <div className="lg:px-40">{children}</div>
        </div>
        <div className="lg:w-4/12 hidden  lg:block">
          <div className="mockup-phone">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">Hi.</div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default EditorLayout;
