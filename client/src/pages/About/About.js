import { Container, Media } from 'reactstrap';
import "./style.css";
import Footer from "../../components/Footer";
import React from 'react';
import TopNav from "../../components/TopNav";


const About = () => {

    return (
      <>
      <TopNav />
      <Container>
   <Media>
      <img className="trevor" src="https://media.licdn.com/dms/image/C5603AQHbjGZC8bO5Uw/profile-displayphoto-shrink_200_200/0?e=1574899200&v=beta&t=oBNAgKSXqe9I59nWuXL6XYV3roZ0ovuAU5LMODFuIEI" alt="Trevor May"></img>
      {/* <Media left href="https://media.licdn.com/dms/image/C5603AQHbjGZC8bO5Uw/profile-displayphoto-shrink_200_200/0?e=1574899200&v=beta&t=oBNAgKSXqe9I59nWuXL6XYV3roZ0ovuAU5LMODFuIEI">
        <Media src="https://media.licdn.com/dms/image/C5603AQHbjGZC8bO5Uw/profile-displayphoto-shrink_200_200/0?e=1574899200&v=beta&t=oBNAgKSXqe9I59nWuXL6XYV3roZ0ovuAU5LMODFuIEI" alt="Trevor May" /> */}
      </Media>
      <Media body>
        <Media heading>
          About Me!
        </Media>
        First things first; I am colorblind! Don't let that scare you. I have plenty of resources that help me code in more colors than just black and white!
      </Media>
   </Container>
   <Footer />
   </>
    );
  };


export default About;