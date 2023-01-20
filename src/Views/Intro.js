import React from "react";
import IntroPng from '../Assets/intro.png'
import { Link } from "react-router-dom";
import styled from "styled-components";



function Intro(props) {
    const StyledLink = styled(Link)`
`;

    return (
        <div>
        <img src = {IntroPng} alt="introduction"/>
            <h1>
                <p>Before we begin...</p>
                Let us ask you a few questions to get everything set!
            </h1>
            <br></br> 
            <button><StyledLink to="/Notification">Get started!</StyledLink></button>

    </div>

        
    );
}


export default Intro

