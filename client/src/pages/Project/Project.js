import React, { Component } from "react";
import "./style.css";
import { Container } from "reactstrap";
// import CarouselDisplay from "../../components/CarouselDisplay";
import CarouselDisplay from "../../components/CarouselDisplay";
import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";

class Project extends Component {

render() {
    return (
        
        <div className="Project">
             <TopNav />   
            <Container>
                <CarouselDisplay />
            </Container>
            <Footer />
        </div>
        
    );
}

}

export default Project;