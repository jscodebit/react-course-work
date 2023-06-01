import React from "react";
import { Outlet } from "react-router-dom";
// import ProfileClassCommponent from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";

class About extends React.Component {
    constructor(props){
        super(props);
        console.log("Parent constructor");

    }
    componentDidMount(){
        console.log("Parent componentDidMount");
    }
    render(){
        console.log("Parent render");
        return (
            <div>
                <h1>About Us Page</h1>
                {/* <Outlet/> */}
                {/* <ProfileClassCommponent name={"Child 1"}/>
                <ProfileClassCommponent name={"Child 2"}/> */}
                <ProfileFunctionalComponent name={"Akshay"}/>
            </div>
        )
    }
}

export default About;