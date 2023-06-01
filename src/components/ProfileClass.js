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

    async componentDidMount(){
        
        const user = await fetch("https://api.github.com/users/jscodebit");
        const json = await user.json();
        // console.log(json);
        this.setState({
            userInfo: json
        })
        // this.timer = setInterval(()=> {
        //     console.log("Namastey react OP");
        // }, 1000)

        console.log("Child componentDidMount" + this.props.name);
    }

    componentDidUpdate(){
        console.log("Child componentDidUpdate");
    }

    componentWillUnmount(){
        //clearing the variables while unmounting or leading new component
        // clearInterval(this.timer);
        console.log("Child will unmount");
    }

    render(){
        const { count } = this.state;
        console.log("Child Render class component"+ this.props.name); 
        return (
            <div>
                <h2>Profile Class Component</h2>
                <h3>Name : {this.state?.userInfo?.login}</h3>
                <img src={this.state?.userInfo?.avatar_url}/>
                <h3>Location : {this.state?.userInfo?.location}</h3>
                <h3>followers : {this.state?.userInfo?.followers}</h3>
                <h4>Count :  {count}</h4>
                <button onClick={() => {
                    this.setState({count: count +1})
                }}>Click Here</button>
            </div>
        )
    }
}

export default Profile;