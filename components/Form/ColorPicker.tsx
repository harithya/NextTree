import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const ColorPicker: React.FC<Props> = ({ label, ...props }) => {
  return (
    <div className="space-y-5">
      <h4 className="font-semibold">{label}</h4>
      <div className="flex items-center space-x-3">
        <input type="color" className=" px-0 py-0 h-14 w-16" {...props} />
        <input
          type="text"
          className="form-control"
          placeholder="bg-primary"
          onChange={() => null}
          {...props}
        />
      </div>
    </div>
  );
};

export default ColorPicker;
