import React from "react";
import Image from "next/image";

const CardTheme = () => {
  return (
    <div className="h-42 w-full border rounded-lg bg-gray-100">
      <div>
        <Image
          src="/theme.png"
          className="rounded-lg"
          alt="Theme"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default CardTheme;
