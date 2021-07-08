import React, { Component } from 'react'

export default class Home extends Component {

    constructor(props){
        super(props);
        const {name}= {...props}
        console.log(this.props);
        this.state={
            name,
            age:10,
        };
    }


    render() {
        console.log(this.state);
        return (
            <div>
               <h1> Name is :{this.props.name}  </h1> 
           <button onClick={()=>{
               if(this.state.name === "Joker") {
                   this.setState ({
                       name:"kiran"
                })
               console.log("afeer setState", this.state);
            }
           }}>  change Name  </button>
           
            </div>
        )
    }
}
