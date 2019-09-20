import React from "react";
import { Jumbotron, Container } from 'reactstrap';
import "./style.css";


const ContactTron = (props) => {
  return (
    <div>
        <Container>
      <Jumbotron className="contact" fluid>
        <Container fluid>
          <h1 className="display-3">Contact Me</h1>
        </Container>
      </Jumbotron>
      </Container>
    </div>
    
  );
};

export default ContactTron;