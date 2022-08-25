import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
  render() {
    let list=this.props.list;
    return (
      <div>
           <input type="text" onKeyDown={this.changeData}></input>
      </div>
    )
  }
  changeData=(event)=>{
    if (event.key=="Enter") {
     this.props.addList(event.target.value);
    }
  } 
}
