import { createGlobalStyle } from "styled-components";
import configData from "./config.json";

const GlobalStyle = createGlobalStyle`
  html, body {
    max-width: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

  #root {
    min-height: 100vh;
  }

  .section {
    min-height: 100vh;
    padding: 1em;

    // CENTER SECTION CONTENT
    display: flex;
    justify-content: center;
  }

  h1 {
    color: #ffffff;
    font-size: 5rem;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: bold;
    text-shadow: 0.1em 0.1em 0 hsl(9000 50% 20%);
  }

  h2 {
    color: #ffffff;
    font-size: 4rem;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: bold;
    text-shadow: 0.1em 0.1em 0 hsl(9000 50% 20%);
  }

  p {
    color: #ffffff;
    font-size: 1.5rem;
    font-family: "Roboto Condensed", sans-serif;
    font-weight:400;
  }

  a:link,a:visited, a:active   {
    color: ${configData.THEME_COLORS.DARK_PINK};
    text-decoration: none;
  }

  a:hover {
    color: ${configData.THEME_COLORS.BRIGHT_PINK};
    text-decoration: none;
  }

  @media only screen and (max-width: 700px) {
    h1 {
      font-size: 2.5rem;
      text-shadow: 0.1em 0.1em 0 hsl(9000 50% 20%);
    }

    h2 {
      font-size: 2rem;
      text-shadow: 0.1em 0.1em 0 hsl(9000 50% 20%);
    }
    p {
      font-size: 1rem;
      font-weight:400;
    }
  }



`;

export default GlobalStyle;
