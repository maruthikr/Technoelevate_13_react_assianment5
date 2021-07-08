import React, { Component } from 'react'
import withCounter from './withCounter';
import './vote.css';
class Vote extends Component {
  
    render() {
        console.log(this.props);
        let {count , increment} = this.props
      return (
        <div id="i" >
            
          <h1 >{count} - {this.props.name}</h1>
          <hr/> <br/>
          <button
            onClick={() => {
             increment()
            }}
          >
            click here
          </button>
        </div>
      );
    }
  }
  
  export default withCounter(Vote)