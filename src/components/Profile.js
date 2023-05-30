import { useState, useEffect } from "react";

const Profile = (props) => {
    const [count, setCount] = useState(0);
    console.log("Render functional component");

    useEffect(()=> {
        console.log("useEffect");
    })

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