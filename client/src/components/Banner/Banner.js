import React from "react";
import "./style.css";

import {Jumbotron } from "reactstrap";


function Banner (props){
    return(
        <Jumbotron className = "title"><strong>Web Development and Design</strong>
        <h3>By Trevor May</h3>
        <i class="fas fa-code"></i>
        <div style={{ backgroundImage: `url(${"trees.jpeg"})` }}></div>
        </Jumbotron>
    )
}
export default Banner;