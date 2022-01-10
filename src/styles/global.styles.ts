import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
        box-sizing: inherit;
    }

  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Assistant', sans-serif;
  }


    input, select, textarea {
        font-family: inherit;
    }

    button {
	    font-family: inherit;
        background-repeat: no-repeat;
        background-position: center;
        background-color: transparent;
        border: 0;
        padding: 0;
        cursor: pointer;
    }

    button:disabled {
        cursor: default;
    }

    a{
        text-decoration: none;
    }


`;

export default GlobalStyle;
