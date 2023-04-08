import { ThemeContext } from "@/contexts/ThemeContext";
import { ThemeContextType } from "@/types/contexts/theme-type";
import Image from "next/image";
import React, { useContext, useRef, useEffect } from "react";

const PreviewContent = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { theme } = useContext<ThemeContextType>(ThemeContext);

  const rgbToHex = (rgb: string) => {
    const hex = Number(rgb.replace(/\D/g, "")).toString(16);
    const res = hex.length === 1 ? `0${hex}` : hex;
    return `#${res}`;
  };

  useEffect(() => {
    setTimeout(() => {
      console.log({
        title: rgbToHex(
          window
            // @ts-ignore
            .getComputedStyle(titleRef.current)
            .getPropertyValue("color")
        ),
        bg: rgbToHex(
          window
            // @ts-ignore
            .getComputedStyle(bgRef.current)
            .getPropertyValue("background-color")
        ),
        button: rgbToHex(
          window
            // @ts-ignore
            .getComputedStyle(buttonRef.current)
            .getPropertyValue("background-color")
        ),
        textButton: rgbToHex(
          window
            // @ts-ignore
            .getComputedStyle(buttonRef.current)
            .getPropertyValue("color")
        ),
      });
    }, 1000);
  }, [theme.name]);

  return (
    <div
      className="px-5 w-full h-screen bg-base-100 flex justify-center items-center"
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
        <h1 className="font-bold text-xl" ref={titleRef}>
          @Haruthya
        </h1>
        {/* <p className="text-gray-400 text-center text-xs px-10">
          Enjoy building everything from small app sites to elegant apps
        </p> */}
        <div className="w-full mt-10 space-y-5">
          <button
            className="btn normal-case btn-primary w-full"
            ref={buttonRef}
          >
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
