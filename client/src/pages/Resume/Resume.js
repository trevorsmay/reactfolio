import React, { Component } from 'react';
import { Container } from "reactstrap";
import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";

class Resume extends Component {
  render() {



    return (
        <>
         <TopNav />   
        <Container>
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 MSUD B.A. Political Science and History
                 DU Coding Bootcamp
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          <p>Consulting and Freelance Web Design</p>
          <p>Comcast Business Account Manager</p>
      
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>
            </p>

				<div className="bars">
				   <ul className="skills">
				
					</ul>
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

export default Resume;