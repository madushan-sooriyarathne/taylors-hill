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
    responsive: {};
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

  responsive: {},
};

export default theme;
