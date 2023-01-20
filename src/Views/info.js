import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from '../Assets/button.png'

const StyledBody = styled.div`
text-align: left;
`;

function Info(props) {


    return (
        <div>
            <StyledBody>
            <h1>
                <p>Hello!</p>
                <br></br> 
                <p>What is the name of your course?</p>
               <textarea rows="2" cols="50"></textarea>
               <p>Which year are you currently studying in?</p>
               <textarea rows="2" cols="50"></textarea>
               <br></br>
               <p><Link to="/Complete"><img src = {Button} alt="Complete btn"></img></Link></p> 
                </h1>
            </StyledBody>

    </div>

        
    );
}


export default Info

