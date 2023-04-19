import http from "@/utils/http";
import { useRouter } from "next/router";
import React, { PropsWithChildren, useEffect } from "react";

interface Props {
  title: string;
  subtitle: string;
}
const AuthLayout: React.FC<PropsWithChildren<Props>> = ({
  children,
  title,
  subtitle,
}) => {
  const router = useRouter();
  useEffect(() => {
    const getLogin = async () => {
      const req = await http.get("/profile");
      if (req.status === 200) {
        router.replace("/admin/links");
      }
    };
    getLogin();
  }, []);

  return (
    <div className="h-screen flex bg-white">
      <div className="xl:w-6/12 flex justify-center  flex-col w-full xl:px-32 px-5">
        <div className="mb-10">
          <h4 className="text-4xl">{title}</h4>
          <p className="mt-2 text-gray-400">{subtitle}</p>
        </div>
        {children}
      </div>
      <div className="xl:w-6/12 xl:block hidden bg-[url('/wp.jpg')] h-screen bg-cover" />
    </div>
  );
};

export default AuthLayout;
