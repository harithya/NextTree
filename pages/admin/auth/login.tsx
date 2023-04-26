import Input from "@/components/Form/Input";
import AuthLayout from "@/components/Layout/AuthLayout";
import { AuthContext } from "@/contexts/AuthContext";
import { AuthContextType } from "@/types/contexts/auth-type";
import http from "@/utils/http";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";
import { setCookie } from "cookies-next";

interface LoginForm {
  username: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<LoginForm>();
  const router = useRouter();
  const { setUser } = useContext<AuthContextType>(AuthContext);

  // login proccess
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<LoginForm>();
  const { addToast } = useToasts();

  const onSubmit = async (data: LoginForm) => {
    setIsLoading(true);
    try {
      const req = await http.post("/auth/login", data);
      await setCookie("token", req.data.token, {
        maxAge: 60 * 60 * 24 * 7,
      });
      await setUser({
        username: req.data.user.username,
        name: req.data.user.name,
        bio: req.data.user.bio,
        image: req.data.user.image,
      });
      router.replace("/admin/links");
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
      <button className={`btn btn-primary w-full ${isLoading && "loading"}`}>
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
