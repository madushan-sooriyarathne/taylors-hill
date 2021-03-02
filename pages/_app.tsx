import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Head from "next/head";

import MenuContextProvider from "../context/MenuContext";

import theme from "../styles/theme";
import GlobalStyles from "../styles/globalStyles";

import "../styles/fonts.css";

const MainApp: React.FC<AppProps> = ({
  Component,
  pageProps,
}: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Taylors Hill Boutique Hotel</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MenuContextProvider>
          <Component {...pageProps} />
        </MenuContextProvider>
      </ThemeProvider>
    </>
  );
};

export default MainApp;
