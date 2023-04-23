import { PencilIcon } from "@heroicons/react/24/outline";
import React, { InputHTMLAttributes, useRef, useEffect, useState } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}
const InputText: React.FC<Props> = ({ className, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    if (isFocus) {
      inputRef.current?.focus();
    }
  }, [isFocus]);

  return (
    <div className="flex space-x-3 items-center">
      {isFocus ? (
        <input
          ref={inputRef}
          className={`w-full min-w-fit outline-none ${className}`}
          {...props}
          onBlur={(e) => {
            setIsFocus(false);
            props.onBlur?.(e);
          }}
        />
      ) : (
        <React.Fragment>
          <label className={`w-auto truncate ${className}`}>
            {props.value}
          </label>
          <button
            className="btn btn-circle btn-xs btn-ghost"
            onClick={() => setIsFocus(true)}
          >
            <PencilIcon className="h-4 w-4" />
          </button>
        </React.Fragment>
      )}
    </div>
  );
};

export default InputText;
