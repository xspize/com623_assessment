import React from 'react'
import IntroPng from '../Assets/intro.png'

function Intro(props) {
    return (
        <div>
        <img src = {IntroPng} alt="introduction"/>
            <h1>
                <p>Welcome!</p>
                Let us ask you a few questions to get everything set!
            </h1>
        </div>
    )
}


export default Intro

