import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import About from "./pages/About";
import TopNav from "./components/TopNav";
import Project from "./pages/Project";
import Resume from "./pages/Resume";
import $ from "jquery";
import ReactGA from "react-ga";
import "./style.css";


// import { Container } from 'reactstrap';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }



render() {
  return (
      <Router>
        <>
         
          <div>
            <Switch>
              <Route exact path="/" component={Home} data={this.state.resumeData.home} />
              <Route exact path="/About" component={About} data={this.state.resumeData.about} />
              <Route exact path="/Contact" component={Contact} data={this.state.resumeData.contact} />
              {/* <Route exact path="/Gallery" component={Gallery} data={this.state.resumeData.gallery} /> */}
              <Route exact path ="/Project" component={Project} data={this.state.resumeData.project} />
              <Route exact path="/Resume" component={Resume} data={this.state.resumeData.resume} />

              <Route component= {NoMatch} />
            </Switch>
          </div>
          </>      
      </Router>
  );
}
}

export default App;
