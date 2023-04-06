import { PencilIcon } from "@heroicons/react/24/outline";
import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}
const InputText: React.FC<Props> = ({ className, ...props }) => {
  return (
    <div className="flex space-x-6 items-center">
      <input className={`w-full outline-none ${className}`} {...props} />
      <PencilIcon className="h-5 w-5" />
    </div>
  );
};

export default InputText;
