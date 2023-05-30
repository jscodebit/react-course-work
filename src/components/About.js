import { Outlet } from "react-router-dom";
import ProfileClassCommponent from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";

const About = () => {
    return (
        <div>
            <h1>About Us Page</h1>
            {/* <Outlet/> */}
            <ProfileClassCommponent name={"Soujanya"}/>
            <ProfileFunctionalComponent name={"Akshay"}/>
        </div>
    )
}
export default About;