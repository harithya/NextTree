import React from "react";
import Image from "next/image";
import { title } from "process";

interface Props {
  name: string;
  img: string;
}
const CardTheme: React.FC<Props> = ({ name, img }) => {
  return (
    <div>
      <div className="h-42 w-full border rounded-lg ">
        <div>
          <Image
            unoptimized
            src={img}
            className="rounded-lg"
            alt="Theme"
            width={300}
            height={300}
          />
        </div>
      </div>
      <h4 className="text-center mt-3 font-semibold">{name}</h4>
    </div>
  );
};

export default CardTheme;
