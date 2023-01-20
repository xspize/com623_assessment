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

#completeimg{

    width: 300px;
    height: 300px;
    left: 47px;
    top: 250px;  
}

#dash{
    width: 393px;
    height: 852px;
    background-color: #9ABBEC;

}

#navtop, h1{
    position: block;
    width: 390px;
    height: 160px;
    left: 1px;
    top: -39px;
    background: #FFFFFF;
    border-radius: 30px;
    font-size: 20px;
    text-align: center;
}

#imagestudent {
    margin-top: 20%;
}

#pluscircle{
    width: 55px;
    height: 55px;
    left: 172px;
    top: 783px;
    margin-top: 40%;
}

`;

export default GlobalStyles;
