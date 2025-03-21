import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #212226;
    box-sizing: border-box;
  }

  body {
    font-family: 'Sarala', sans-serif;
    background-color: #f8f9fa;
    color: #333;
  }
`;

export default GlobalStyle;