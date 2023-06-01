import React from "react";

class Profile extends React.Component {
    constructor(props){
        super(props);
        console.log("Child Constructor class component"+ this.props.name);
        this.state = {
            count: 0,
            userInfo: {
                login: '',
                avatar_url: '',
                location: '',
                followers: 0
            }
        }
    }

    componentDidMount(){
        console.log("Child componentDidMount" + this.props.name);
        // const user = await fetch("https://api.github.com/users/jscodebit");
        // const json = await user.json();
        // // console.log(json);
        // this.setState({
        //     userInfo: json
        // })
        
    }

    componentDidUpdate(){
        console.log("Child componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("Child will unmount");
    }

    render(){
        const { count } = this.state;
        console.log("Child Render class component"+ this.props.name); 
        return (
            <div>
                <h2>Profile Class Component</h2>
                <h3>Name : {this.state.userInfo.login}</h3>
                <img src={this.state.userInfo.avatar_url}/>
                <h3>Location : {this.state.userInfo.location}</h3>
                <h3>followers : {this.state.userInfo.followers}</h3>
                <h4>Count :  {count}</h4>
                <button onClick={() => {
                    this.setState({count: count +1})
                }}>Click Here</button>
            </div>
        )
    }
}

export default Profile;