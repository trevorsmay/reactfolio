import React from "react";
import "./style.css";

import { Jumbotron, Container } from "reactstrap";


function Banner (){
    return(
       <Jumbotron fluid>
           <Container fluid>
        <strong>Web Development and Design</strong>
        <h3>By Trevor May</h3>
        <i className="fas fa-code"></i>
        </Container>
        </Jumbotron>
        
    )
}
export default Banner;