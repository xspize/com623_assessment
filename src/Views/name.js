import React from "react";
import IconName from '../Assets/Icon.png'
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from '../Assets/button.png'



function Name(props) {
    const StyledLink = styled(Link)`
`;

    return (
        <div>
        <img src = {IconName} alt="Icon with a student in it"/>
            <h1>
                <p>What is your name?</p>
                <br></br> 
               <textarea rows="2" cols="50"></textarea>
               <br></br>
            <p><Link to="/"><img src = {Button}></img></Link></p>
            </h1>



    </div>

        
    );
}


export default Name

