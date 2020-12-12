import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
        font-family: ${(props) => props.theme.fontPrimary};
        font-weight: 400;
        letter-spacing: 0.5px;
        scroll-behavior: smooth;
    }

    body {
        max-width: 100vw;
        max-height: 100vh;
        overflow-y: scroll;
        overflow-x: hidden;
    }
`;

export default globalStyles;
