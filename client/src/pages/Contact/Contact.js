import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import Footer from "../../components/Footer";
import ContactTron from "../../components/ContactTron";
import "./style.css";


export default class Example extends React.Component {
  render() {
    return (
      <>
      <Container>
        <ContactTron />
      <Form className="form">
        <Label for="Name">Name</Label>
        <Input type="name" name="name" id="name" placeholder="name" />
      </Form>
      <Form>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input type="email" name="email" id="Email" placeholder="email address" />
        </FormGroup>
        <FormGroup>
          <Label for="Text">Inquiry</Label>
          <Input type="textarea" name="text" id="Text" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
      </Container>
      <Footer />
      </>
    );
    
  }
  
}



