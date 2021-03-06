import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
} from "styled-components";

const globalStyles: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
        font-family: ${(props) => props.theme.fonts.primary};
        font-weight: 400;
        letter-spacing: 0.5px;
        scroll-behavior: smooth;
        color: ${(props) => props.theme.colors.black};
        box-sizing: border-box;

        ${(props) => props.theme.responsive.big} {
            font-size: 56.25%;
        }

        ${(props) => props.theme.responsive.smaller} {
            font-size: 50%;
        }
    }

    body {
        height: 100%;
        width :100%;
        overflow-y: auto;
        overflow-x: hidden;
        border-left: ${(props) =>
          `${props.theme.sizes.frameSize} solid ${props.theme.colors.white}`};
        border-right: ${(props) =>
          `${props.theme.sizes.frameSize} solid ${props.theme.colors.white}`};

        &::after, &::before {
            content: "";
            height: ${(props) => props.theme.sizes.frameSize};
            position: fixed;
            left: 0;
            right: 0;
            background-color: ${(props) => props.theme.colors.white};
            z-index: 20;
        }

        &::before {
            top: 0;
        }

        &::after {
            bottom: 0;
        }
    }

    p {
        font-size: 1.5rem;
        text-align: center;
        color: ${(props) => props.theme.colors.secondary}
    }

    
`;

export default globalStyles;
