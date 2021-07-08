import React, { Component } from 'react'

function withCounter(OrgComponent){

     class Counter extends Component {
         state={
             count:0
         }

         increment =()=>{
             this.setState({
                 count:this.state.count+1
             })
         }
        render() {
            return (
               <OrgComponent count={this.state.count} increment={this.increment} {...this.props} />
            )
        }
    }
    
    return Counter;
}

export default withCounter;