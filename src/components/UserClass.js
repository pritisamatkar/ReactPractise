import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log("child constructor");
        this.state={
            userInfo:{
                name:"xyz",
                location: "Default",
                avatar_url:"avtar"
            }
        }
    }
    async componentDidMount(){
       // console.log("child component did mount");
        const data = await fetch("https://api.github.com/users/pritisamatkar");
        const json = await data.json();
        console.log("json",json);
        this.setState({
            userInfo:json
        })
        console.log("component did mount");
    }
    componentDidUpdate(){
        console.log("component did update")
    }
    componentWillUnmount(){
        console.log("component will unmount");
    }
    render (){
        console.log("child render");
        const {name,location,avatar_url} = this.state.userInfo;
        return(
            <div className="userCard">
                <img src={avatar_url} />
                <h2>Name: {name} </h2>
                <h3>Location : {location}</h3>
            </div>
        )
    }
}

export default UserClass;