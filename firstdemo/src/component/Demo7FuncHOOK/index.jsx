import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {createRoot} from 'react-dom/client'

//类式组件
// class Index extends Component {
    
// state={
//     num:0
// }
//   render() {
//     return (
//       <div>
//         <h3>这是类式组件  {this.state.num}</h3>
//         <button onClick={this.btnClick}>点位+1</button>
//       </div>
//     )
//   }
//   btnClick=()=>{
//     this.setState(state=>state.num++)
//   }
// }

///函式组件 index 开头要大写
function Index() {
    let [num,setNum] = React.useState(0);//有其他参数 在复制这行
    React.useEffect(()=>{
        let timer= setInterval(()=>{
            setNum(num=> { return ++num});
        },1000)

        return ()=>{
            clearInterval(timer);
        } //返回的函数相当于 类式componentWillUnmount（结束前函数）函数
    },[]);//第二个参数不填，检测所有参数，空数组 谁也不检测，只执行一次  ；想检测谁在数组填谁


    function btnClick() {
        console.log("bth");
        setNum(num=> { return ++num});
    }
    function btnUnmont() {
       //ReactDOM.unmountComponentAtNode(document.getElementById("root"));
       let root=createRoot(document.getElementById("root"))
       //let root=ReactDOM.createRoot(document.getElementById("root"))
       root.unmount();
    }

    return (
        <div>
            <h3>这是类式组件  {num}</h3>
            <button onClick={btnClick}>点位+1</button>
            <button onClick={btnUnmont}>点位+1</button>
        </div>
    )

}


export default Index
