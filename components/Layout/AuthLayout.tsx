import React, { PropsWithChildren } from "react";

interface Props {
  title: string;
  subtitle: string;
}
const AuthLayout: React.FC<PropsWithChildren<Props>> = ({
  children,
  title,
  subtitle,
}) => {
  return (
    <div className="h-screen flex bg-white">
      <div className="lg:w-6/12 flex justify-center  flex-col w-full lg:px-32 px-5">
        <div className="mb-10">
          <h4 className="text-4xl">{title}</h4>
          <p className="mt-2 text-gray-400">{subtitle}</p>
        </div>
        {children}
      </div>
      <div className="lg:w-6/12 lg:block hidden bg-[url('/wp.jpg')] h-screen bg-cover" />
    </div>
  );
};

export default AuthLayout;
