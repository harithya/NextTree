import { listBackground } from "@/pages/api/dummy";
import React from "react";
import FlatColor from "./Form/FlatColor";

const BackgroundForm = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-5 mb-10">
        {listBackground.map((val, i) => (
          <div key={i}>
            <div
              className={`w-full h-48 hover:scale-95 transition-all cursor-pointer rounded-lg border flex justify-center items-center ${val.className}`}
            >
              {val.childClassName && (
                <div
                  className={`h-8 w-8 bg-contain bg-no-repeat ${val.childClassName}`}
                />
              )}
            </div>
            <h4 className="text-center mt-3 ">{val.name}</h4>
          </div>
        ))}
      </div>
      <FlatColor />
    </div>
  );
};

export default BackgroundForm;
