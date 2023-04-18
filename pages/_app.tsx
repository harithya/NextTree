import MainLayout from "@/components/Layout/MainLayout";
import "@/styles/globals.css";
import type { ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ToastProvider } from "react-toast-notifications";
import { AuthContextProvider } from "@/contexts/AuthContext";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>);

  return (
    <AuthContextProvider>
      <ThemeProvider>
        <ToastProvider placement="top-right" autoDismiss>
          {getLayout(<Component {...pageProps} />)}
        </ToastProvider>
      </ThemeProvider>
    </AuthContextProvider>
  );
}
