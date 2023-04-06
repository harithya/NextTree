import AuthLayout from "@/components/Layout/AuthLayout";
import { useRouter } from "next/router";
import React, { ReactElement, SyntheticEvent } from "react";

const Login = () => {
  const router = useRouter();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    router.push("/admin/home");
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="example@gmail.com"
        className="input input-bordered w-full "
      />
      <input
        type="password"
        placeholder="****"
        className="input input-bordered w-full "
      />
      <div className="flex justify-between items-center">
        <div className="form-control">
          <label className="cursor-pointer justify-start space-x-5 label">
            <input type="checkbox" className="checkbox checkbox-primary" />
            <span className="label-text">Remember me</span>
          </label>
        </div>
        <a
          href="#"
          className="label-text text-primary-focus  border-b border-b-primary-focus"
        >
          Forgot Password
        </a>
      </div>
      <button className="btn btn-primary w-full">Login</button>
      <div className="text-center">
        <label className="text-primary">
          Belum punya akun ?{" "}
          <a href="#" className="text-primary-focus">
            Register
          </a>
        </label>
      </div>
    </form>
  );
};

Login.getLayout = (page: ReactElement) => {
  return (
    <AuthLayout
      title="Sign In"
      subtitle="Welcome back, please login to your account"
    >
      {page}
    </AuthLayout>
  );
};

export default Login;
