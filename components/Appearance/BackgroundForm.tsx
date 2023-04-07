import { listBackground } from "@/pages/api/dummy";
import React from "react";

const BackgroundForm = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {listBackground.map((val, i) => (
        <div key={i}>
          <div
            className={`w-full h-48 rounded-lg border flex justify-center items-center ${val.className}`}
          >
            {val.childClassName && (
              <div
                className={`h-8 w-8 bg-contain bg-no-repeat ${val.childClassName}`}
              />
            )}
          </div>
          <h4 className="text-center mt-3 font-semibold">{val.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default BackgroundForm;
