import { AuthContext } from "@/contexts/AuthContext";
import { AuthContextType } from "@/types/contexts/auth-type";
import Image from "next/image";
import React, { useContext } from "react";
import { useQuery } from "react-query";
import http from "@/utils/http";
import { LinkResult } from "@/types/api";
import helper from "@/utils/helper";
import { ThemeContext } from "@/contexts/ThemeContext";
import { ThemeContextType } from "@/types/contexts/theme-type";

const PreviewContent = () => {
  const { user } = useContext<AuthContextType>(AuthContext);
  const { theme } = useContext<ThemeContextType>(ThemeContext);

  const { data } = useQuery(["links"], async () => {
    const req = await http.get("link");
    return req.data.links;
  });

  return (
    <div
      className={`px-5 w-full h-screen flex justify-center items-start flex-1`}
      style={{
        backgroundColor: theme?.colors.background,
      }}
    >
      <div className="flex py-20 justify-center w-full flex-col items-center">
        <div className="avatar mb-5">
          <div className="w-20 mask mask-squircle">
            <Image
              src={helper.getAvatar(user.image)}
              height={150}
              width={150}
              alt="Profile Image"
            />
          </div>
        </div>
        <h1
          className="font-bold text-xl line-clamp-1 text-center"
          style={{
            color: theme?.colors.title,
          }}
        >
          {user?.name}
        </h1>
        {user?.bio && (
          <p className="text-gray-400 text-center text-xs mt-2 px-10">
            {user.bio}
          </p>
        )}
        <div className="w-full mt-10 space-y-5">
          {data
            ?.filter((i: LinkResult) => i.is_active === 1)
            .map((val: LinkResult, i: number) => (
              <button
                key={i}
                className="btn normal-case w-full"
                style={{
                  backgroundColor: theme?.colors.button,
                  color: theme?.colors.text_button,
                  borderColor: theme?.colors.button,
                }}
              >
                {val.title}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PreviewContent;
