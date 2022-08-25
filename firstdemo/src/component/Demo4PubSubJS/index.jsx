import React, { Component } from 'react'
import PubSubJs, { clearAllSubscriptions } from 'pubsub-js'//发布 订阅消息
import './index.css'

export default class index extends Component {
  componentDidMount(){
      this.token=PubSubJs.subscribe('wode',(msg,data)=>{
      console.log(data);
         this.setState(data)
     })
  }
  componentWillUnmount(){
    PubSubJs.unsubscribe(this.token);
  }
  render() {
   
    return (
      <div>
         <input type="text" value={this.state.txt}/>
      </div>
    )
  }
  state={
       txt:""
 }
}
