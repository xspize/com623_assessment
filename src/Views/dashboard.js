import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Student from '../Assets/student.png'
import Circleicon from '../Assets/plus-circle.png'



function Dashboard(props) {


    return (

        <div id="dash">
            <div id="navtop">
                14/10/22
                <h1>You do not have any tasks today.</h1>
                </div>

                <p><img src = {Student} alt="Student" id="imagestudent"></img></p>

                <p><img src = {Circleicon} alt="circle plus" id="pluscircle"></img></p>
        </div>
        
    );
}


export default Dashboard

