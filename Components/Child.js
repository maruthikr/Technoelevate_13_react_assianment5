import React, { Component } from 'react'

export default class Child extends Component {
    render() {
        return (
            <div>
                <div>
                <button onClick={()=>{
                    this.props.action("Node")
                }} > Change Course  </button>
                </div>

                <div>
                <h1> this is child to parent components </h1>
            </div>
            </div>
        )
    }
}
