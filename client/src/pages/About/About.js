import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import "./style.css";


const About = (props) => {
  return (
    <div>
        <Container>
      <Jumbotron className="about" fluid>
        <Container fluid>
          <h1 className="display-3">About Me</h1>
        </Container>
      </Jumbotron>
      </Container>
    </div>
    
  );
};

export default About;