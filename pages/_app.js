import { ThemeProvider } from "styled-components";
import Head from "next/head";
import theme from "../styles/theme";
import GlobalStyles from "../styles/globalStyles";
import "../styles/fonts.css";

const MainApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Taylors Hill Boutique Hotel</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MainApp;
