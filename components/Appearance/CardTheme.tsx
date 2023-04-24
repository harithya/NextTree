import React from "react";
import Image from "next/image";
import { ThemeResult } from "@/types/api";

const CardTheme: React.FC<ThemeResult> = ({ name, image, colors }) => {
  return (
    <div className="hover:scale-95 transition-all cursor-pointer">
      <div className={`h-42 w-full border rounded-lg`}>
        <div>
          <Image
            unoptimized
            src={image}
            className="rounded-lg"
            alt="Theme"
            width={300}
            height={300}
          />
        </div>
      </div>
      <h4 className="text-center mt-3">{name}</h4>
    </div>
  );
};

export default CardTheme;
