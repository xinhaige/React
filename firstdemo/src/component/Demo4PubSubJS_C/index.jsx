import React, { Component } from 'react'
import PubSubJs from 'pubsub-js'//发布 订阅消息
import './index.css'

export default class index extends Component {
  render() {
   
    return (
      <div>
         <button onClick={this.btnClick}>changeInput</button>
      </div>
    )
  }
  btnClick=()=>{
    PubSubJs.publish("wode",{txt:new Date().getTime()})
  }
}
