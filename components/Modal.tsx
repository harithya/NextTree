import React, { PropsWithChildren } from "react";

interface Props {
  id: string;
  title?: string;
}
const Modal: React.FC<PropsWithChildren<Props>> = ({ id, children, title }) => {
  return (
    <React.Fragment>
      <input type="checkbox" id={id} className="modal-toggle" />
      <label htmlFor={id} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          {title && <h3 className="font-bold text-lg">{title}</h3>}
          <div className="flex flex-col items-center justify-center">
            {children}
            {/* <label htmlFor="my-modal-3" className="btn btn-sm btn-circle ">
              ✕
            </label> */}
          </div>
        </div>
      </label>
    </React.Fragment>
  );
};

export default Modal;
