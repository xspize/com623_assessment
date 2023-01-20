import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";




function Intro(props) {

const StyledLink = styled(Link)`
`;

    const Styledbody = styled.div`
    width: 358px;
    height: 221px;
    left: 34px;
    top: 87px;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    
    color: #000000;
`;

const StyledLabel = styled.label`

width: 242px;
height: 38px;
left: 62px;
top: 509px;

font-style: normal;
font-weight: 700;
font-size: 26px;
line-height: 31px;
color: #000000;
`;

    return (
        <div>
            <Styledbody>
                <p>Before we begin...</p>
                It is recommended to have notifications enabled so you can receive reminders about your upcoming deadlines.
                <p>Enable notifications?</p>
                <br></br>
                <StyledLabel>
                <StyledLink to="/name"><input type="radio" input/></StyledLink>
                Yes
                </StyledLabel>
                <p/>
                <StyledLabel>
                <StyledLink to="/name"><input type="radio" input/></StyledLink>
                No
                </StyledLabel>
                <br></br>
            </Styledbody>
            <br></br> 

    </div>

        
    );
}


export default Intro

