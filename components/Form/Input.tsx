import React, {
  InputHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { className, error, ...props }: InputProps,
  ref
) => (
  <div>
    <input
      ref={ref}
      {...props}
      className={`input input-bordered w-full 
      ${error && "input-error"}
      ${className} `}
    />
    {error && (
      <label className="label">
        <span className="label-text-alt text-error">{error}</span>
      </label>
    )}
  </div>
);

export default forwardRef(Input);
