import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
  render() {
    let list=this.props.list;
    let numDone=list.reduce((previousValue, currentValue)=>{
       return currentValue.done?previousValue+1:previousValue;
    },0)
    return (
      <div>
           <input type="checkbox" onClick={this.allclick}/>已完成{numDone}/全部{list.length}
      </div>
    )
  }
  allclick=(event)=>{
    let list=this.props.list;
    let isck=event.target.checked;
    this.props.allclick(isck);
  }
}

