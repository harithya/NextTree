import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import Image from "next/image";
import { InferGetServerSidePropsType } from "next";
import http from "@/utils/http";
import helper from "@/utils/helper";
import { LinkResult } from "@/types/api";
import Link from "next/link";

const LinkPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { theme, user, link }: any = data;

  return (
    <div className="min-h-screen flex justify-items-center  justify-center">
      <div className="w-full lg:w-5/12 bg-white min-h-screen">
        <div className=" w-full h-screen relative">
          <div
            key={theme?.colors.background}
            id="bg-container"
            className={`px-8 w-full  h-full flex  justify-center bg-cover items-start flex-1`}
            style={{
              background: theme?.colors.background,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom",
            }}
          >
            <div className="flex py-20 justify-center w-full flex-col items-center">
              <div className="avatar mb-5">
                <div className={`w-24 mask ${theme?.attributes.avatar_mask}`}>
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
              <div className="w-full mt-10 space-y-5 ">
                {link.map((val: LinkResult, i: number) => (
                  <Link
                    href={val.url}
                    target="_blank"
                    key={i}
                    className={`btn normal-case w-full relative rounded-full border ${theme?.attributes?.button_radius}`}
                    style={{
                      backgroundColor: theme?.colors.button,
                      color: theme?.colors.text_button,
                      borderColor: theme?.colors.border_button,
                    }}
                  >
                    {val?.image && (
                      <Image
                        height={80}
                        width={80}
                        src={val?.image}
                        alt="cover image"
                        className={`${theme?.attributes.button_radius} h-6 w-6 absolute left-3`}
                      />
                    )}
                    <span>{val.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LinkPage.getLayout = (page: ReactElement) => {
  return page;
};

export const getServerSideProps = async (ctx: any) => {
  const username = ctx.query.username;
  let data = {};
  try {
    const req = await http.get(`app/${username}`);
    data = req.data.result;
  } catch (error) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data: data,
    },
  };
};

export default LinkPage;
