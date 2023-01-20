import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

body {
    Display:flex;
    text-align: center;
    width: 15%;
    border-radius: 1px;
    margin-left: 42.5%;
    a:link { text-decoration: none; }
    a:visited { text-decoration: none; }
    a:hover { text-decoration: none; }
    a:active { text-decoration: none; }
}

h1 {
    color: #000000;    
}

button {
    width: 268px;
    height: 50px;
    left: 63px;
    top: 585px;
    color: #ffffff;
    background: #00050D;
    border-radius: 11px;
    font-size: 20px;
    font-weight: bold;
}



`;

export default GlobalStyles;
