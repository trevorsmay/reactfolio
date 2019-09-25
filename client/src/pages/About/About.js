import { Container } from 'reactstrap';
import "./style.css";
import Footer from "../../components/Footer";
import React, { Component } from 'react';
import TopNav from "../../components/TopNav";

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <>
      <TopNav />
      <Container>
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src="https://media.licdn.com/dms/image/C5603AQHbjGZC8bO5Uw/profile-displayphoto-shrink_200_200/0?e=1574899200&v=beta&t=oBNAgKSXqe9I59nWuXL6XYV3roZ0ovuAU5LMODFuIEI" alt="Trevor May Profile Picture" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>First things first; I am colorblind! Don't let that scare you. I have plenty of resources that help me code in more colors than just black and white!</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Trevor May</span><br />
						   <span>720-244-4332</span><br />
                     <span>trevor.shaun.may@gmail.com</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
   </Container>
   <Footer />
   </>
    );
  }
}

export default About;