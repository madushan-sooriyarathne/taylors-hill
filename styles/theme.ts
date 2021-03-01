import "styled-components";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      bgLight: string;
      bgMedium: string;
      bgDark: string;
      primary: string;
      primaryLight: string;
      secondary: string;
      secondaryLight: string;
      danger: string;
      success: string;
    };
    fonts: {
      primary: string;
      secondary: string;
    };
    sizes: {
      frameSize: string;
    };
    shadows: {
      low: string;
      medium: string;
    };
    responsive: {
      largest: string;
      larger: string;
      large: string;
      bigger: string;
      big: string;
      mediumLarge: string;
      mediumBig: string;
      medium: string;
      mediumSmall: string;
      mediumSmaller: string;
      small: string;
      smaller: string;
      smallest: string;
      mobileLarge: string;
      mobileMedium: string;
      mobileSmall: string;
    };
  }
}

const theme: DefaultTheme = {
  colors: {
    black: "#04141A",
    white: "#FFF",
    bgLight: "#FAFAFA",
    bgMedium: "#FCE7D0",
    bgDark: "#E6C7A8",
    primary: "#D69D19",
    primaryLight: "#ECB662",
    secondary: "#53534A",
    secondaryLight: "#BCBCBC",
    danger: "#d00000",
    success: "#52b788",
  },
  fonts: {
    primary: "'Avenir Next', sans-sarif",
    secondary: "'Made Canvas', 'Times New Roman', Times, serif",
  },
  sizes: {
    frameSize: "1.5rem",
  },
  shadows: {
    low: "0 0 8px 0 rgba(0, 0, 0, 0.2)",
    medium: "0 0 16px 0 rgba(0, 0, 0, 0.2)",
  },

  responsive: {
    largest: "@media only screen and (max-width: 112.5em)", // 1800px
    larger: "@media only screen and (max-width: 106.25em)", // 1700px
    large: "@media only screen and (max-width: 100em)", // 1600px;
    bigger: "@media only screen and (max-width: 93.75em)", // 1500px
    big: "@media only screen and (max-width: 87.5em)", // 1400px
    mediumLarge: "@media only screen and (max-width: 81.25em)", // 1300px
    mediumBig: "@media only screen and (max-width: 75em)", // 1200px
    medium: "@media only screen and (max-width: 68.75em)", // 1100px
    mediumSmall: "@media only screen and (max-width: 62.5em)", // 1000px
    mediumSmaller: "@media only screen and (max-width: 56.25em)", // 900px
    small: "@media only screen and (max-width: 50em)", // 800px
    smaller: "@media only screen and (max-width: 43.75em)", // 700px
    smallest: "@media only screen and (max-width: 37.5em)", // 600px
    mobileLarge: "@media only screen and (max-width: 31.25em)", // 500px
    mobileMedium: "@media only screen and (max-width: 25em)", // 400px
    mobileSmall: "@media only screen and (max-width: 18.75em)", // 300px
  },
};

export default theme;
