import MainLayout from "@/components/Layout/MainLayout";
import "@/styles/globals.css";
import { ReactElement, ReactNode, useEffect } from "react";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ToastProvider } from "react-toast-notifications";
import { AuthContextProvider } from "@/contexts/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { LoadingContextProvider } from "@/contexts/LoadingContext";
import { useRouter } from "next/router";
import http from "@/utils/http";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>);

  const router = useRouter();
  useEffect(() => {
    const checkLogin = async () => {
      const guestPages = ["/admin/auth/login", "/admin/auth/register"];
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
  }, [router]);

  return (
    <QueryClientProvider client={queryClient}>
      <LoadingContextProvider>
        <AuthContextProvider>
          <ThemeProvider>
            <ToastProvider placement="top-right" autoDismiss>
              {getLayout(<Component {...pageProps} />)}
            </ToastProvider>
          </ThemeProvider>
        </AuthContextProvider>
      </LoadingContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
