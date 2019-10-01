import React from "react";
import "./style.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar  light expand="md">
          <NavbarBrand href="/"><h2><i className="fas fa-hiking"><br></br></i>Trevor Shaun May</h2></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/About"><h4>About</h4></NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="/Contact"><h4>Contact</h4></NavLink>
              </NavItem> */}
              {/* <NavItem>
                  <NavLink href="/Gallery"><h4>Gallery</h4></NavLink> 
              </NavItem> */}
              <NavItem>
                  <NavLink href="/Project"><h4>Projects</h4></NavLink> 
              </NavItem>
              <NavItem>
                  <NavLink href="/Resume"><h4>Resume</h4></NavLink> 
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}



// export default class Navigation extends Component {

//     constructor(props) {
//         super(props);
//         this.toggle = this.toggle.bind(this);
//         this.state = {
//             isOpen: false,
//             loggedIn: false
//         };
//     }

//     componentDidMount() {
//         API.isLoggedIn().then(user => {
//             if (user.data.loggedIn) {
//                 this.setState({
//                     loggedIn: true
//                 });
//             }
//         }).catch(err => {
//             console.log(err);
//         });
//     }

//     logout() {
//         API.logout().then((data)=> {
//             window.location.pathname = "/"
//         }).catch((err)=> {
//             console.log(err)
//         })
//     }

//     toggle() {
//         this.setState({
//             isOpen: !this.state.isOpen
//         });
//     }

//     // componentDidMount () {
//     //     window.onscroll = () => {
//     //         this.setState({ currentScrollHeight: window.scrollY})
//     //     };
//     // }

//     render() {
//         return(

//             <div>
//                 <Navbar className="navbar" light expand="lg" sticky="top">
//                     <NavbarBrand href="/" className="titleFont"><i className="fas fa-hiking"></i><strong>Trevor Shaun May</strong></NavbarBrand>
//                     <NavbarToggler onClick={this.toggle} />
//                     <Collapse isOpen={this.state.isOpen} navbar>
//                         <Nav className="ml-auto" navbar>
//                             <NavItem>
//                                 <NavLink href="/"><i className="fas fa-home light-text"></i></NavLink>
//                             </NavItem>
//                             <UncontrolledDropdown nav inNavbar>
//                                 <DropdownToggle nav caret>
//                                     <i className="fas fa-user light-text"></i>
//                                 </DropdownToggle>
//                                 <DropdownMenu right>
//                                     {this.state.loggedIn ? (
//                                         <>
//                                             <DropdownItem>
//                                                 <NavLink href="/about">About</NavLink>
//                                             </DropdownItem>
//                                             <DropdownItem>
//                                                 <NavLink onClick={this.logout}>Logout</NavLink>
//                                             </DropdownItem>
//                                         </>
//                                     ) : (
//                                         <>
//                                             <DropdownItem>
//                                                 <NavLink href="/login">login</NavLink>
//                                             </DropdownItem>
//                                             <DropdownItem>
//                                                 <NavLink href="/signup">signup</NavLink>
//                                             </DropdownItem>
//                                         </>
//                                     )}
//                                 </DropdownMenu>
//                             </UncontrolledDropdown>
//                         </Nav>
//                     </Collapse>
//                 </Navbar>
//             </div>

//         );
//     }
    // render() {
    //     const opacity =Math.min(100 / this.state.currentScrollHeight, 1)
    //     return <div style={{opacity}} id="navbar"></div>
    // }
// }

