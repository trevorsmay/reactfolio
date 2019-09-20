import React, {Component} from "react";
import "./Projects.scss";
import { Button, Container } from "reactstrap";
import { Link } from "react-router-dom";
import API from "../../utils/API";
// import MealPlan from "../../components/MealPlan/MealPlan";
import axios from "axios";
import Calendar from "../../components/Calender";



class Projects extends Component {
   
    // calendarComponentRef = React.createRef()
    
state = {
        
        loggedIn: false,                   
        user: null,
        loading: true,
        height: null,
        weight: null,
        sex: null,
        age: null,
        goals: null, 
        image: null,
        workouts: null
    }

   setImage = () => {
        let image = this.state.image; 
        console.log(image)
        return image  
    }
   
componentDidMount() {
        
       
        this.loading();
        API.isLoggedIn().then(user => {
            if (user.data.loggedIn) {
                this.setState({
                    loggedIn: true,
                    user: user.data.user,
                    sex: user.data.sex,
                    weight: user.data.weight,
                    height: user.data.height,
                    age: user.data.age,
                    goals: user.data.goals
                }, ()=>{
                    console.log(this.state.goals);
                    this.getProfileImage(this.state.user._id);
                   
                });
            }
        }).catch(err => {
            console.log(err);
        });
    
       
        
    }




getProfileImage(user){
    console.log(":)")
        axios.get('/api/image/getImage/' + user)
            .then(data => {
                // console.log(data.data.imageData)
              
                let image = "shutup";
               
                // console.log(image);
                this.setState({
                    image:  image
                }, ()=>{
                    console.log(this.state.image);
                })
            })
    }

loading() {
        /* after 1 second loading is set to false 
        adds an automated buffer so that it will 
        attempt to not show client loading?
         */
        setTimeout(()=> { 
            this.setState({
                loading: false
            })
        }, 1000)  
    }




 
    

    render() {
        return (
            <div className="profilePage">

           

                <Container>
                    

                {this.state.loggedIn ? (    
                               //  puts the name in the header
                <>      


               
                        <div className="profileBox"> 
                           {/* header */}
                        {/* <img id="profile" src= {this.state.image} alt= "profile"/>  */}
                        <h1 id="userTitle">Welcome {this.state.user.username}</h1>
                        
                        <Calendar
                        user = {this.state.user._id}/>


                        {
                         this.state.user.goals === 1 ?
                         
                            (<h2 name = "goals header">We hope we can leverage your schedule and diet to help you lose weight</h2>)

                        :this.state.user.goals === 2?
                            (<h2 name = "goals header">Lets try to get a great workout schedule for you to maintain fitness!</h2>)

                        :this.state.user.goals === 3? 
                            (<h2 name = "goals header">Lets help you lift some iron and git pumped!</h2>) 

                        : 
                        <h2>Please fill out your fitness goals in the update profile section</h2> 
                    }
                        
                        <p id= "height">Height: {this.state.user.height}</p>
                        <p id= "weight">Weight: {this.state.user.weight}</p>
                        <p id= "sex">Sex: {this.state.user.sex}</p>
                        <p id= "age">Age: {this.state.user.age}</p>
                        {/* <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} /> */}
                        <Link className = "UserInfoLink" to ="/UserInfo"><Button className = "updateAccount" color = "info" block> Update Profile</Button></Link>

                        
                    
                    </div>

            </>

                  
                  /* 
                    IF THE USER IS NOT LOGGED IN EXECUTE BELOW CODE
                     */

                ) 
                : (
                    <div className="noUser">
                        {!this.state.loading ? ( /* checks to see if this page is loading  */
                            <>
                                <h1>please log in</h1> {/*if the user hasn't logged in show them the option to  */}
                                <Link className="loginLink" to="/login"><Button className="loginBtn" color="info" block>Login</Button></Link>
                            </>
                        ) : (/* also add a loading icon  */
                            <img id="loadingIcon" src="./assets/images/loading.gif" alt="loading"/>
                        )}
                    </div> 
                )}
                </Container>
            </div>
        )
    }
}


export default Projects;