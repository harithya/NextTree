import { ThemeContext } from "@/contexts/ThemeContext";
import { ThemeContextType } from "@/types/contexts/theme-type";
import Image from "next/image";
import React, { useContext, useRef, useEffect } from "react";

const btn = ["Twitter", "Facebook", "Instagram", "Youtube"];
const PreviewContent = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { theme } = useContext<ThemeContextType>(ThemeContext);
  const rgbToHex = (rgb: string) => {
    return rgb;
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log({
  //       title: rgbToHex(
  //         window
  //           // @ts-ignore
  //           .getComputedStyle(titleRef.current)
  //           .getPropertyValue("color")
  //       ),
  //       bg: rgbToHex(
  //         window
  //           // @ts-ignore
  //           .getComputedStyle(bgRef.current)
  //           .getPropertyValue("background-color")
  //       ),
  //       button: rgbToHex(
  //         window
  //           // @ts-ignore
  //           .getComputedStyle(buttonRef.current)
  //           .getPropertyValue("background-color")
  //       ),
  //       textButton: rgbToHex(
  //         window
  //           // @ts-ignore
  //           .getComputedStyle(buttonRef.current)
  //           .getPropertyValue("color")
  //       ),
  //     });
  //   }, 1000);
  // }, [theme.name]);

  return (
    <div
      className="px-5 w-full h-screen flex justify-center items-center"
      style={{
        backgroundColor: theme.colors.bg,
      }}
      ref={bgRef}
    >
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
        <h1
          className="font-bold text-xl"
          style={{ color: theme.colors.title }}
          ref={titleRef}
        >
          @Azzahra
        </h1>
        {/* <p className="text-gray-400 text-center text-xs px-10">
          Enjoy building everything from small app sites to elegant apps
        </p> */}
        <div className="w-full mt-10 space-y-5">
          {btn.map((val, i) => (
            <button
              key={i}
              className="btn normal-case  w-full"
              style={{
                backgroundColor: theme.colors.button,
                border: theme.colors.button,
                color: theme.colors.textButton,
              }}
            >
              {val}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviewContent;
