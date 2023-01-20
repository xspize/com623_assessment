import React from "react";
import { Link } from "react-router-dom";
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

                <p><Link to="/addtask"><img src = {Circleicon} alt="circle plus" id="pluscircle"></img></Link></p>
        </div>
        
    );
}


export default Dashboard

