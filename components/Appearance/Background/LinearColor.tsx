import ColorPicker from "@/components/Form/ColorPicker";
import React from "react";

const LinearColor = () => {
  return (
    <div className="space-y-5">
      <ColorPicker value={undefined} label="Color Top" />
      <ColorPicker value={undefined} label="Color Bottom" />
    </div>
  );
};

export default LinearColor;
