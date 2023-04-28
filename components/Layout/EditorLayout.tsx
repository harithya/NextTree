import React, { PropsWithChildren, useContext } from "react";
import MainLayout from "./MainLayout";
import { EyeIcon } from "@heroicons/react/24/outline";
import Modal from "../Modal";
import PhoneLayout from "./PhoneLayout";
import { ThemeProvider } from "@/contexts/ThemeContext";

import dynamic from "next/dynamic";

const PreviewContent = dynamic(() => import("../PreviewContent"), {
  ssr: false,
});

interface Props {
  title?: string;
}
const EditorLayout: React.FC<PropsWithChildren<Props>> = ({
  children,
  title,
}) => {
  return (
    <ThemeProvider>
      <MainLayout>
        <div className="flex space-x-10">
          <div className="xl:w-8/12 w-full">
            <div className="mb-10">
              <h3 className="text-2xl font-semibold">{title}</h3>
            </div>
            <div className="xl:px-32">{children}</div>
          </div>
          <div className="xl:w-4/12 hidden xl:block mt-20">
            <div className="xl:sticky top-28 relative">
              <PhoneLayout>
                <PreviewContent />
              </PhoneLayout>
            </div>
          </div>
        </div>
        <div className="fixed xl:hidden bottom-5 right-0 left-0 flex justify-center items-center">
          <label
            htmlFor="modal-preview"
            className="btn btn-secondary px-10 shadow-md "
          >
            <EyeIcon className="h-5 w-5 mr-3" />
            Preview
          </label>
          <Modal id="modal-preview">
            <PhoneLayout>
              <PreviewContent />
            </PhoneLayout>
          </Modal>
        </div>
      </MainLayout>
    </ThemeProvider>
  );
};

export default EditorLayout;
