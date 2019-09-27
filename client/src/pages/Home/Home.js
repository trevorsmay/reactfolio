import React, { Component } from "react";
// import { Container } from "reactstrap";
import "./style.css";
// import Banner from "../../components/Banner";
// import TopNav from "../../components/TopNav";
import { Button } from "reactstrap";
// import { ParallaxBanner } from "react-scroll-parallax";
// import MiddleBanner from "../../components/MiddleBanner";

// import CardTwo from "../../components/CardTwo";


class Home extends Component {


  render() {
    return (
      <>
      <div className="Main">
      <h1>Web Development and Design</h1>
      <br></br>
      <h1>By Trevor May</h1>
      <br></br>
      <Button color="primary" size="lg" href="/About">Enter!</Button>
      </div>
      {/* <TopNav />
      <div className = "Home">
      <Banner /> 
      <Parallax />
      <MiddleBanner />
      <DinnerBanner />
      </div> */}
      </>
    )
  }
    
}

export default Home;