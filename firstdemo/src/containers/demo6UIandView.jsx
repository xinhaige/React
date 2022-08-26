import React, { Component } from 'react'
//引入前端ui
import demoUi from '../component/Demo6rudex';
import {addAction,delAction,addAsyncAction} from '../Redux/count_action'
import {connect} from 'react-redux'


//定义ui组件
class index extends Component {
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
    addAsyncAction(num,1000);

    this.setState((obj)=>{
       return obj.txt++;
    })
  }
}


//暴露容器组件
export default connect(
    state=>({num:state}),
    {
         add:addAction,//最原始的调用 store.dispatch({type,num})  
         del:delAction,
         addAsync:addAsyncAction,
         addAsyncAction:addAsyncAction
    }
 )(index);










