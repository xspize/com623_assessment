import React from "react";
import IconName from '../Assets/Icon.png'
import { Link } from "react-router-dom";
import Button from '../Assets/button.png'



function Name(props) {


    return (
        <div>
        <img src = {IconName} alt="Icon with a student in it"/>
            <h1>
                <p>What is your name?</p>
                <br></br> 
               <textarea rows="2" cols="50"></textarea>
               <br></br>
            <p><Link to="/Info"><img src = {Button} alt="Informative btn"></img></Link></p>
            </h1>



    </div>

        
    );
}


export default Name

