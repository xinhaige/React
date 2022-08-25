import React, { Component } from 'react'
import Demo3Center from '../Demo3Center'
import Demo3Head from '../Demo3Head'
import Demo3Floot from '../Demo3Floot' 
import {nanoid} from 'nanoid' //nanoid  小的uuid
import './index.css'

export default class index extends Component {
  render() {
    let list=this.state.list;
    return (
      <div>
         <Demo3Head addList={this.addList}/>
         <Demo3Center list={list} itemClick={this.itemClick} btnClick={this.btnClick}/>
         <Demo3Floot allclick={this.allclick} list={list}/>
      </div>
    )
  }
  allclick=(isclick)=>{
    let {list}=this.state;
    let newlist=list.map((item)=>{
          return {...item,done:isclick}
    })
    this.setState({list:newlist});
  }
  addList=(name)=>{
    let {list}=this.state;
    list.push({
      id:nanoid(),
      name,
      done:false
    })
    this.setState(list);
}

  btnClick=(id)=>{   
    let {list}=this.state;
    let lenwlist=list.filter(item=>{
      return item.id!==id;
    })
    this.setState({list:lenwlist});
  }
  //复选框选择事件
  itemClick=(isclick,id)=>{
      let list=this.state.list;
      let newlist= list.map((item,index)=>{
               if (item.id===id) {
                 return {...item,done:isclick};
               }
               return {...item};
      })
      this.setState({list:newlist});
  }
  state={
     list:[
      {
        id:'123456',
        done:true,
        name:'demo1'
      },
      {
        id:'123456795',
        done:false,
        name:'demo2'
      }]
     }

}
