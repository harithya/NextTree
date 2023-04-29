import Image from "next/image";
import Link from "next/link";
import React, { ReactElement } from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="flex w-full lg:flex-row lg:justify-between items-center container-fluid">
        <div className="lg:w-6/12">
          <h2 className="text-5xl font-bold leading-normal">
            Everything you are. In one, simple link in bio.
          </h2>
          <p className="text-lg mt-5 text-gray-500">
            Join 35M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="flex space-x-5 mt-8">
            <Link href={"/admin/auth/login"} className="btn btn-primary px-10">
              Sign In Now
            </Link>
            <Link
              href={"/admin/auth/register"}
              className="btn  btn-outline px-10"
            >
              Sign Up
            </Link>
          </div>
        </div>
        <div className="lg:w-6/12  justify-end hidden lg:flex">
          <Image
            src={"/bg.png"}
            height={500}
            width={500}
            alt="Hero Image"
            className="mt-20"
          />
        </div>
      </div>
    </div>
  );
};

Home.getLayout = (page: ReactElement) => {
  return page;
};

export default Home;
