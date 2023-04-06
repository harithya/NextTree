import { PhotoIcon, SwatchIcon, TrashIcon } from "@heroicons/react/24/outline";
import React from "react";
import InputText from "./InputText";

const LinkCard = () => {
  return (
    <div className="card w-full bg-base-100 shadow-sm mb-5">
      <div className="card-body w-full">
        <div className="flex justify-between">
          <InputText
            type="text"
            className="card-title"
            autoComplete={"nope"}
            value={"Twitter"}
          />
          <input type="checkbox" className="toggle" />
        </div>
        <InputText
          type="text"
          autoComplete="nope"
          className=" mt-2"
          value={
            "https://www.youtube.com/watch?v=VXlpuj8Le-g&list=RDllzj6tUlXTc&index=20"
          }
        />
        <div className="mt-5 flex justify-between">
          <div className="space-x-5 flex">
            <button className="btn btn-circle btn-sm btn-ghost">
              <PhotoIcon className="h-5 w-5" />
            </button>
            <button className="btn btn-circle btn-sm btn-ghost">
              <SwatchIcon className="h-5 w-5" />
            </button>
          </div>
          <button className="btn btn-circle btn-sm btn-ghost">
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkCard;
