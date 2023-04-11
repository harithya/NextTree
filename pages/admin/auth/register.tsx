import Input from "@/components/Form/Input";
import AuthLayout from "@/components/Layout/AuthLayout";
import Link from "next/link";
import React, { ReactElement } from "react";
import { useForm } from "react-hook-form";
import useStore from "@/hooks/useStore";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

const Register = () => {
  const { handleSubmit, register, reset } = useForm<RegisterForm>();
  const { isLoading, mutate, error } = useStore();

  const onSubmit = (data: RegisterForm) => {
    mutate({
      url: "auth/register",
      data,
      onSuccess: () => reset(),
    });
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        placeholder="Name"
        {...register("name")}
        error={error?.name}
      />

      <Input
        type="email"
        placeholder="Email"
        {...register("email")}
        error={error?.email}
      />
      <Input
        type="password"
        placeholder="Password"
        {...register("password")}
        error={error?.password}
      />

      <button className={`btn btn-primary w-full ${isLoading ?? "loading"}`}>
        Register
      </button>
      <div className="text-center">
        <label className="text-primary">
          Sudah punya akun ?{" "}
          <Link href="/admin/auth/login" className="text-primary-focus">
            Login
          </Link>
        </label>
      </div>
    </form>
  );
};

Register.getLayout = (page: ReactElement) => {
  return (
    <AuthLayout
      title="Sign Up"
      subtitle="Welcome back, please register to your account"
    >
      {page}
    </AuthLayout>
  );
};

export default Register;
