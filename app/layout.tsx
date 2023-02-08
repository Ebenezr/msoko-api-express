"use client";

import { store, persistor } from "../store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import "./globals.css";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./Page.module.css";
import { Montserrat } from "@next/font/google";

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
      <head />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <body
            className={`font-montserrat  bg-bg ${
              isMobile
                ? styles.mobileContainer
                : isIpad
                ? styles.ipadContainer
                : isDesktop
                ? styles.desktopContainer
                : styles.mobileContainer
            }`}
          >
            <Header />
            <main>{children}</main>
            <Footer />
          </body>
        </PersistGate>
      </Provider>
    </html>
  );
}
