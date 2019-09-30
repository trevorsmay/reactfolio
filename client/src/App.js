import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
// import Gallery from "./pages/Gallery";
// import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import About from "./pages/About";
// import TopNav from "./components/TopNav";
import Project from "./pages/Project";
import Resume from "./pages/Resume";

// import ReactGA from "react-ga";
import "./style.css";
// import Contact from "./pages/Contact";


// import { Container } from 'reactstrap';
class App extends Component {






render() {
  return (
      <Router>
        <>
         
          <div>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/About" component={About} />
              {/* <Route exact path="/Contact" component={Contact} data={this.state.contact} /> */}
              {/* <Route exact path="/Gallery" component={Gallery} data={this.state.resumeData.gallery} /> */}
              <Route exact path ="/Project" component={Project}/>
              <Route exact path="/Resume" component={Resume}  />

              <Route component= {NoMatch} />
            </Switch>
          </div>
          </>      
      </Router>
  );
}
}

export default App;
