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

const MainApp: React.FC<AppProps> = ({
  Component,
  pageProps,
}: AppProps): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener("load", () => {
      setLoading(false);
    });
  });

  return (
    <>
      <Head>
        <title>Taylors Hill Boutique Hotel</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MenuContextProvider>
          <NotificationContextProvider>
            <PreLoadingOverlay loading={loading} />
            <Component {...pageProps} />
          </NotificationContextProvider>
        </MenuContextProvider>
      </ThemeProvider>
    </>
  );
};

export default MainApp;
