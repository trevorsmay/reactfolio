import React, { Component } from "react";
import "./style.css";
// import { Container } from "reactstrap";
// import CarouselDisplay from "../../components/CarouselDisplay";
import CarouselDisplay from "../../components/CarouselDisplay";
import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";

class Project extends Component {

render() {
    return (
        
        <div className="project">
             <TopNav />   
             <div style={{display:"flex", justifyContent:"center", alignItems:"center", height: "25rem"}}>
            {/* <Container className="projectdisplay"> */}
                <CarouselDisplay />
                {/* </Container> */}
                </div>
            <Footer />
        </div>
        
    );
}

}

export default Project;