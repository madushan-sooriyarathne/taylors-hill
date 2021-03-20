import { useEffect, useState } from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Head from "next/head";

import MenuContextProvider from "../context/MenuContext";
import NotificationContextProvider from "../context/NotificationContext";

import theme from "../styles/theme";
import GlobalStyles from "../styles/globalStyles";

import PreLoadingOverlay from "../components/layout/pre-loading-overlay/PreLoadingOverlay";

import "../styles/fonts.css";
import CookieNotice from "../components/cookie-notice/CookieNotice";

const MainApp: React.FC<AppProps> = ({
  Component,
  pageProps,
}: AppProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoading(false);
    });
  });

  return (
    <>
      <Head>
        <title>Taylors Hill Boutique Hotel</title>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MenuContextProvider>
          <NotificationContextProvider>
            <CookieNotice />
            <PreLoadingOverlay isLoading={isLoading} />
            <Component {...pageProps} />
          </NotificationContextProvider>
        </MenuContextProvider>
      </ThemeProvider>
    </>
  );
};

export default MainApp;
