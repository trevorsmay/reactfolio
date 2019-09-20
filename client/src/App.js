import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import About from "./pages/About";
import TopNav from "./components/TopNav";

// import { Container } from 'reactstrap';



function App() {
  return (
      <Router>
        <>
          <TopNav />   
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/About" component={About} />
              <Route exact path="/Contact" component={Contact} />
              <Route exact path="/Gallery" component={Gallery} />
              <Route exact path ="/Projects" component={Projects}/>

              <Route component= {NoMatch} />
            </Switch>
          </div>
          </>      
      </Router>
  );
}

export default App;
