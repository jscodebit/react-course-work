import { useState, useEffect } from "react";

const Profile = (props) => {
    const [count, setCount] = useState(0);
    console.log("Render functional component");

    useEffect(()=> {
        console.log("useEffect");
        //How do you destroy this in functional component
        // const timer = setInterval(()=>{
        //     console.log("React OP");
        // })
        //This is unmounting in functional component
        // return () => {
        //     console.log("useEffect return");
        //     clearInterval(timer);
        // }
    })

    console.log("render");

    return (
        <>
            <h2>This is a profile page</h2>
            <h3>Name : {props.name}</h3>
            <h4>Count: {count}</h4>
            <button onClick={() => {setCount(count+1)}}>Click here</button>
        </>
    );
}

export default Profile;