import { PhotoIcon, SwatchIcon, TrashIcon } from "@heroicons/react/24/outline";
import React from "react";

const LinkCard = () => {
  return (
    <div className="card w-full bg-base-100 shadow-sm">
      <div className="card-body w-full">
        <div className="flex justify-between">
          <h4 className="card-title">Twitter</h4>
          <input type="checkbox" className="toggle" />
        </div>
        <p className="line-clamp-1 w-full mt-2">
          https://www.youtube.com/watch?v=VXlpuj8Le-g&list=RDllzj6tUlXTc&index=20
        </p>
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
