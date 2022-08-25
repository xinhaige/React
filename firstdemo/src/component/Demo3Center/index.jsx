import React, { Component } from 'react'
import PropTypes from 'prop-types' //属性类型
import './index.css'

export default class index extends Component {
  static propTypes={
    itemClick:PropTypes.func.isRequired,
    btnClick:PropTypes.func.isRequired,
    list:PropTypes.array.isRequired
  }
//   // 指定 props 的默认值：
//   static defaultProps = {
//   list: [
//     {
//       id:'123456',
//       done:true,
//       name:'demo1'
//     },
//     {
//       id:'123456795',
//       done:false,
//       name:'demo2'
//     },
//     {
//       id:'1234sef56795',
//       done:false,
//       name:'demo5'
//     }]
// };
  render() {
    let list=this.props.list;
    return (
      <div>
          <ul className='ul'>
          {
            list.map((item)=>{
               return  <li className='li' key={item.id}><input type="checkbox" defaultChecked={item.done} onClick={this.itemClick(item.id)}/>{item.name} <button className="btnclose" onClick={()=>{this.btnClick(item.id)}}>X</button></li>
            })
          }
        </ul>
      </div>
    )
  }

  btnClick=(id)=>{
    this.props.btnClick(id);
  }
  itemClick(id){
     return (e)=>{
      this.props.itemClick(e.target.checked,id);
     }
  }
}
