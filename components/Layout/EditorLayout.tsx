import React, { PropsWithChildren } from "react";
import MainLayout from "./MainLayout";
import { EyeIcon } from "@heroicons/react/24/outline";

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
        <div className="xl:w-8/12 w-full">
          <div className="mb-10">
            <h3 className="text-2xl font-semibold">{title}</h3>
          </div>
          <div className="xl:px-40">{children}</div>
        </div>
        <div className="xl:w-4/12 hidden xl:block">
          <div className="mockup-phone">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">Hi.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed xl:hidden bottom-5 right-0 left-0 flex justify-center items-center">
        <button className="btn btn-secondary px-10 shadow-md ">
          <EyeIcon className="h-5 w-5 mr-3" />
          Preview
        </button>
      </div>
    </MainLayout>
  );
};

export default EditorLayout;
