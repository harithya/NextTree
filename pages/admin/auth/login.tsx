import Input from "@/components/Form/Input";
import AuthLayout from "@/components/Layout/AuthLayout";
import useStore from "@/hooks/useStore";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import { useForm } from "react-hook-form";

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<LoginForm>();
  const { mutate, isLoading, error } = useStore();
  const router = useRouter();

  const onSubmit = (data: LoginForm) => {
    router.push("/admin/home");
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="email"
        placeholder="example@gmail.com"
        {...register("email")}
        error={error?.email}
      />
      <Input
        type="password"
        placeholder="****"
        {...register("password")}
        error={error?.password}
      />
      <div className="flex justify-between items-center">
        <div>
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
      <button className={`btn btn-primary w-full ${isLoading ?? "loading"}`}>
        Login
      </button>
      <div className="text-center">
        <label className="text-primary">
          Belum punya akun ?{" "}
          <Link href="/admin/auth/register" className="text-primary-focus">
            Register
          </Link>
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
