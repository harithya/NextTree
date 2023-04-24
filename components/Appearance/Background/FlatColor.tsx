import ColorPicker from "@/components/Form/ColorPicker";
import React from "react";

const FlatColor = () => {
  return (
    <div>
      <ColorPicker label={"Flat Color"} onChange={() => null} />
    </div>
  );
};

export default FlatColor;
