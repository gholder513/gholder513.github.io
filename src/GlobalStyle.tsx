import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Spline Sans Mono", monospace;
    font-optical-sizing: auto;
    font-weight: 400; /* Default weight */
  }

  .light {
    font-weight: 300;
  }

  .bold {
    font-weight: 700;
  }

  .italic {
    font-style: italic;
  }
`;

export default GlobalStyle;
