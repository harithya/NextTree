import LinkCard from "@/components/Links/LinkCard";
import EditorLayout from "@/components/Layout/EditorLayout";
import { PlusIcon } from "@heroicons/react/24/outline";
import React, { ReactElement } from "react";

const Links = () => {
  return (
    <div>
      <button className="btn btn-primary w-full">
        <PlusIcon className="h-5 w-5 mr-3" />
        Add Link
      </button>
      <div className="mt-5">
        <LinkCard />
      </div>
    </div>
  );
};

Links.getLayout = (page: ReactElement) => {
  return <EditorLayout>{page}</EditorLayout>;
};

export default Links;
