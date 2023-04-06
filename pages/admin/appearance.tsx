import EditorLayout from "@/components/Layout/EditorLayout";
import React, { ReactElement } from "react";

const Appearance = () => {
  return <div>Appearance</div>;
};

Appearance.getLayout = (page: ReactElement) => {
  return <EditorLayout>{page}</EditorLayout>;
};

export default Appearance;
