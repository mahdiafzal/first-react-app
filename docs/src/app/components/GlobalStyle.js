
// import injectGlobal helper
import { createGlobalStyle } from 'styled-components'

// Global style
const GlobalStyle = createGlobalStyle`
  html,
  body,
  #app,
  .wrapper {
    min-height: 100vh;
    height: 100%;
  }

  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  * {
    &,
    &::after,
    &::before {
      box-sizing: inherit;
    }
  }

  body {
    padding: 0;
    margin: 0;
    font: 1rem / 1.414 arial, sans-serif;
  }
`;

export default GlobalStyle