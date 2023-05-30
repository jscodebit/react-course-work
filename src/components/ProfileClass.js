import React from "react";

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
        console.log("Constructor class component");
    }

    componentDidiMount(){
        console.log("componentDidMount");
    }
    render(){
        const { count } = this.state;
        console.log("Render class component"); 
        return (
            <div>
                <h2>Profile Class Component</h2>
                <h3>Name : {this.props.name}</h3>
                <h4>Count :  {count}</h4>
                <button onClick={() => {
                    this.setState({count: count +1})
                }}>Click Here</button>
            </div>
        )
    }
}

export default Profile;