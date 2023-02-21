"use client";
import "./globals.css";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./Page.module.css";
import { Montserrat } from "@next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";
import Head from "next/head";
import { usePathname } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname;
  const [isMobile, setIsMobile] = useState(false);
  const [isIpad, setIsIpad] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsMobile(/iPhone|Android/i.test(navigator.userAgent));
    setIsIpad(/iPad/i.test(navigator.userAgent));
    setIsDesktop(/Windows|Mac|Linux/i.test(navigator.userAgent));
  }, []);
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Head>
        <title>Kapa Store</title>
        <meta property="og:title" content="Kapa oil ltd" key="title" />
      </Head>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <ToastContainer />
        <body
          className={`font-montserrat bg-bg ${
            isMobile
              ? styles.mobileContainer
              : isIpad
              ? styles.ipadContainer
              : isDesktop
              ? styles.desktopContainer
              : styles.mobileContainer
          }`}
        >
          {!isLoginPage && <Header />}
          <main>{children}</main>
          {!isLoginPage && <Footer />}
        </body>
      </QueryClientProvider>
    </html>
  );
}
