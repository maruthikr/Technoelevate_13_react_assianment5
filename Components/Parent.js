import React, { Component } from 'react'
import Child from './Child';
export default class Parent extends Component {
state={
    Cource:"javascript"
}
changeCourse= (newCo)=>{
    console.log("Data from Chid Componet", newCo);
    let newCourse =prompt("Enter the Counter")
    if (newCourse !=null) {
        this.setState({
            course:newCourse
        })
    }
}

    render() {
        return (
            <div>
                <h1> Course Name:{this.state.course} </h1>
                <Child action={this.state.changeCourse} />
            </div>
        )
    }
}
