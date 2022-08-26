import React, { Component } from 'react'
//引入前端ui
import {userAction} from '../Redux/user_action'
import {connect} from 'react-redux'
import {nanoid} from 'nanoid'


//定义ui组件
class userContainer extends Component {
    state={
        name:""
    }

  render() {
    let {users}=this.props;
    return (
      <div>
         <input name="input1" ref={(e)=>this.input1=e}></input>
         <button onClick={this.add}>添加一个人</button>
         <ul>
          {
             users.map(item=>{
               return <li>{item.name}</li>
             })
          }
         </ul>
      </div>
    )
  }
 
  componentDidMount(){
    
  }
 
  add=()=>{
    let name=this.input1.value;
   if (name==="") {
      alert("kong");
      return;
   } 
    let {users,userAction}=this.props;
   
    userAction({id:nanoid(),
    name});
  }
}


//暴露容器组件
export default connect(
    state=>{
      console.log("state",state);
      return({users:state.users})},
    {
      userAction
    }
 )(userContainer);










