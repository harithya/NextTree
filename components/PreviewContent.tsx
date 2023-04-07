import Image from "next/image";
import React from "react";

const PreviewContent = () => {
  return (
    <div className="px-5">
      <div className="flex justify-center flex-col items-center">
        <div className="avatar mb-5">
          <div className="w-20 mask mask-squircle">
            <Image
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              height={150}
              width={150}
              alt="Profile Image"
            />
          </div>
        </div>
        <h1 className="font-bold">@Haruthya</h1>
        {/* <p className="text-gray-400 text-center text-xs px-10">
          Enjoy building everything from small app sites to elegant apps
        </p> */}
        <div className="w-full mt-5 space-y-5">
          <button className="btn normal-case btn-primary w-full">
            Twitter
          </button>
          <button className="btn normal-case btn-primary w-full">
            Facebook
          </button>
          <button className="btn normal-case btn-primary w-full">
            Instagram
          </button>
          <button className="btn normal-case btn-primary w-full">
            Youtube
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewContent;
