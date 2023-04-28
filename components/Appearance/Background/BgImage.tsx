/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { ThemeContext } from "@/contexts/ThemeContext";
import { ThemeResult } from "@/types/api";
import { ThemeContextType } from "@/types/contexts/theme-type";
import http from "@/utils/http";
import React, { useContext, useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";

const BgImage = () => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { addToast } = useToasts();

  const { theme, handleSetTheme } = useContext<ThemeContextType>(ThemeContext);

  useEffect(() => {
    if (data !== null) {
      const uploadImage = async () => {
        setIsLoading(true);
        try {
          const formData = new FormData();
          formData.append("image", data);
          const req = await http.post("my-theme/upload-bg", formData);
          handleChangeTheme(req.data.image);
        } catch (error: any) {
          addToast(error.response.data.message, {
            appearance: "error",
          });
        }
        setIsLoading(false);
      };
      uploadImage();
    }
  }, [data]);

  const handleChangeTheme = (img: string) => {
    handleSetTheme({
      ...theme,
      colors: {
        ...theme?.colors,
        background: `url(${img})`,
      },
    });
  };

  const formatUrlImage = () => {
    if (theme.colors.background) {
      const url = theme.colors.background.replace("url(", "").replace(")", "");
      // check if url
      if (url.match(/\.(jpeg|jpg|gif|png)$/)) {
        return url;
      }
      return null;
    }
  };

  return (
    <div className="space-y-5">
      <h4 className="font-semibold">Image</h4>
      <div className="flex items-center space-x-3">
        <label
          htmlFor="file-upload"
          className="h-48 bg-gray-100 border w-full rounded-lg flex justify-center items-center cursor-pointer "
        >
          {isLoading ? (
            <p className="text-center">Loading... </p>
          ) : formatUrlImage() ? (
            <img
              src={
                formatUrlImage() ??
                "https://res.cloudinary.com/cv-abdi-creative/image/upload/v1680905007/next-tree/icon/Vector_sk6692.png"
              }
              className="h-full w-20 object-cover"
              alt="Default Image"
            />
          ) : (
            <img
              src={
                "https://res.cloudinary.com/cv-abdi-creative/image/upload/v1680905007/next-tree/icon/Vector_sk6692.png"
              }
              className="h-full w-20 object-contain"
              alt="Default Image"
            />
          )}

          <input
            type="file"
            className="hidden"
            id="file-upload"
            accept="image/png, image/jpeg"
            onChange={(e) => {
              if (e.target.files) {
                setData(e.target.files[0]);
              }
            }}
          />
        </label>
      </div>
    </div>
  );
};

export default BgImage;
