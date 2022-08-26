import React, { Component } from 'react'

export default class index extends Component {
    state={
        txt:0
    }
  render() {
    let {txt}=this.state;
    return (
      <div>
         <input value={txt}></input>
         <button onClick={this.add}>input+</button>
      </div>
    )
  }
  componentDidMount(){
    console.log("prop",this.props);
  }
 
  add=()=>{
    this.setState((obj)=>{
       return obj.txt++;
    })
  }
}
