import User from './User';
import UserClass from './UserClass';
import React from 'react';
class About extends React.Component{
    constructor(props){
        super(props);
        console.log("parent constructor");
    }
    componentDidMount(){
        console.log("parent component did mount");
    }
    render(){
        console.log("parent render");
        return(
            <div>
                <h2>About Page </h2> 
            <UserClass  name={"Aarya S"} location={"Nagpur"}/>
            </div>
        )
    }
}


export default About;
