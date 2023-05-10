import MainLayout from "@/components/Layout/MainLayout";
import "@/styles/globals.css";
import { ReactElement, ReactNode, useEffect } from "react";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { ToastProvider } from "react-toast-notifications";
import { AuthContextProvider } from "@/contexts/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { LoadingContextProvider } from "@/contexts/LoadingContext";
import { useRouter } from "next/router";
import http from "@/utils/http";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <div>{page}</div>);

  const router = useRouter();
  useEffect(() => {
    const checkLogin = async () => {
      const guestPages = [
        "/admin/auth/login",
        "/admin/auth/register",
        "/",
        "/[username]",
      ];
      if (!guestPages.includes(router.pathname)) {
        try {
          await http.get("profile");
        } catch (error: any) {
          if (error.response.status === 401) {
            router.push("/admin/auth/login");
          }
        }
      }
    };
    checkLogin();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider placement="top-right" autoDismiss>
        <LoadingContextProvider>
          <AuthContextProvider>
            {getLayout(<Component {...pageProps} />)}
          </AuthContextProvider>
        </LoadingContextProvider>
      </ToastProvider>
    </QueryClientProvider>
  );
}
