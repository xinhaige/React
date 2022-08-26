import React, { Component } from 'react'

export default class index extends Component {
    state={
        txt:0
    }
  render() {
    const {num}=this.props;
    return (
      <div>
         <input value={num}></input>
         <button onClick={this.add}>input+</button>
      </div>
    )
  }
  componentDidMount(){
    
  }
 
  add=()=>{
    let {num,add,del,addAsync,addAsyncAction}=this.props;
    num++;
    // addAsync(num,1000);
    let time=1000
    addAsyncAction(num,1000)

    this.setState((obj)=>{
       return obj.txt++;
    })
  }
}
