import React from "react";
import Image from "next/image";

const ImageProfile = () => {
  return (
    <div className="flex items-center space-x-5">
      <div className="avatar">
        <div className="w-28 mask mask-squircle">
          <Image
            alt="Profile Image"
            height={300}
            width={300}
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>
      <div className="w-full space-y-5">
        <button className="btn btn-primary w-full">Pick an Image</button>
        <button className="btn btn-outline btn-primary w-full">
          Remove Image
        </button>
      </div>
    </div>
  );
};

export default ImageProfile;
