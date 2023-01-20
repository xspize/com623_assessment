import React from "react";
import { Link } from "react-router-dom";
import Checkin from '../Assets/check-circle.png'



function addtask(props) {


    return (

        <div id="addtask">

                <h2>Add a reminder for your task</h2>
                <br></br>
                <p><h2>What kind of task do you want to add?</h2></p>
                <label id ="labeltask">
                <ul><input type="radio" input/> Assessment</ul>
                <ul><input type="radio" input/> Group Work</ul>
                <ul><input type="radio" input/> Other</ul> 
                </label>
                <br></br>
                <p><Link to="/dashboard"><img src = {Checkin} alt="Check in mark" id="checkmark"></img></Link></p>



        </div>
        
    );
}


export default addtask

