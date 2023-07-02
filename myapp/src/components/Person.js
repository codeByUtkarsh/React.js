import React, {Component} from 'react';
import Man from './Man';
class Person extends Component{
    constructor(props){
        super(props);
        this.props=props;
        this.state={
            name:"John",
            age:20
        };
}
nameChangeHandler=()=>{
    console.log(this.state);
    this.setState({
        name:"Utkarsh",
        age:21
    },()=>{
        console.log(this.state);
    });
}
render(){
    
    return(
        <div>
        <div><i>Hello {this.state.name},{this.props.age} years old , Welcome to the fitness Club</i></div>
        <br />
        <button onClick={this.nameChangeHandler.bind(this)}>Click Here</button>
        </div>
       
       
    );
}
}
export default Person;