import React, { Component } from 'react'
import demo3 from './index.module.css'

export default class index extends Component {
  render() {
    return (
      <div>
          <h1 className={demo3.h1}>这是demo3的文件</h1>
        <input type="text" onKeyDown={this.changeData}></input>
        <ul className={demo3.ul}>
          {
            this.state.list.map((item)=>{
               debugger
               return  <li key={item.id}><input ref={(e)=>{this.saveInput(e,item.id)}} type="checkbox" checked={item.ischeck} onClick={(e)=>{this.itemClick(e,item.id)}}/>{item.name}</li>
            })
          }
          <li> <input type="checkbox" onClick={this.allclick}/>已完成{this.state.list.filter((item)=>{return item.ischeck==true}).length}/全部{this.state.list.length}</li>
        </ul>
      </div>
    )
  }
   saveInput=(e,id)=>{
       
   }

  changeData=(event)=>{
      if (event.key=="Enter") {
        let list=this.state.list;
        let num=list.length+1;
        list.push({
           id:num,
           name:event.target.value+num,
           ischeck:false
        })
        this.setState(list);
      }
  }
  itemClick=(event,id)=>{
    let list=this.state.list;
    list.forEach((item,i)=>{
      if(item.id==id){
        list[i].ischeck=event.target.checked
      }
    })
    this.setState(list);
  }
  allclick=(event)=>{
    let list=this.state.list;
    let isck=event.target.checked;
    list.forEach((item,index)=>{
        list[index].ischeck=isck;
    })
    this.setState(list);
  }
 state={
   list:[{id:1,name:"demo1",ischeck:true},{id:2,name:"demo2",ischeck:false},{id:3,name:"demo3",ischeck:false}]
 }
}
