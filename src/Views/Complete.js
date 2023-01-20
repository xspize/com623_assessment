import React from "react";
import { Link } from "react-router-dom";
import CompleteGif from '../Assets/complete.gif'



function Complete(props) {


    return (
        <div>
            <h1>
                <p>Thank you!</p>
                <br></br> 
                <p><Link to="/Dashboard"><img src = {CompleteGif} id="completeimg" alt="Gif with a checkmark"></img></Link></p>
               <br></br>
                <p>& Welcome!</p>
                </h1>

    </div>

        
    );
}


export default Complete

