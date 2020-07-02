import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 80px 65px 0;
    font-family: 'Lato';
  }
  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Lato';
  }
  p {
    font-size: 16px;
    letter-spacing: 2px;
    line-height: 1.4;
    margin: 40px 0 30px;
  }
  ul {
    padding: 0;
    margin: 0;
  }

  h1 {
    font-size: 85px;
    margin: 0;
    line-height: .8;
  }
`;


export default GlobalStyle;