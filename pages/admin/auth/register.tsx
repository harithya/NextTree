import Input from "@/components/Form/Input";
import AuthLayout from "@/components/Layout/AuthLayout";
import http from "@/utils/http";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement, useState } from "react";
import { useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";

interface RegisterForm {
  name: string;
  username: string;
  password: string;
}

const Register = () => {
  const { handleSubmit, register } = useForm<RegisterForm>();
  const router = useRouter();

  //handle post register
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<RegisterForm>();
  const { addToast } = useToasts();

  const onSubmit = async (data: RegisterForm) => {
    setIsLoading(true);
    try {
      const req = await http.post("/auth/register", data);
      addToast(req.data.message, { appearance: "success" });
      router.push("/admin/auth/login");
    } catch (error: any) {
      if (error.response.status == 422) {
        setError(error.response.data.errors);
      }
      addToast(error.response.data.message, {
        appearance: "error",
      });
    }
    setIsLoading(false);
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
        type="text"
        placeholder="Username"
        {...register("username")}
        error={error?.username}
      />
      <Input
        type="password"
        placeholder="Password"
        {...register("password")}
        error={error?.password}
      />

      <button className={`btn btn-primary w-full ${isLoading && "loading"}`}>
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
