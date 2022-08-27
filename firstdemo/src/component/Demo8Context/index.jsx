import React, { Component, Fragment, PureComponent } from 'react'    //PureComponent 代替自己写的shouldComponentUpdate函数 
import { useState } from 'react';
import ReactDOM from 'react-dom'


//一。Context
//初始化   
//<MyContext.Provider value={this.state.name}> 父组件要用MyContext.Provider包裹子组件
//声明想要数据

//s二。PureComponent
//PureComponent 代替自己写的shouldComponentUpdate函数 
//原来的component只要调用 this.setState 就会重新渲染组件  新的 会对比 state context props

//三 renderProps
//函数的方式传递组件 相当于vue的插槽


///四 getDerivedStateFromError
//会将这个组件的子组将出错信息放在这里 返回state对象
let MyContext = React.createContext();

export default class index extends Component {
    state = {
        name: "a组件的数据",
        hasError: ''
    }
    static getDerivedStateFromError(error) {
        console.log("error", error);
        return { hasError: error }
    }

    btnClick = () => {
        //this.setState({name:"a组件的新数据"});
        this.setState({ name: "a组件的新数据" });
    }
    shouldComponentUpdate(nextProp, nextState) {
        if (this.state.name === nextState.name) {
            return false
        }
        return true
    }
    render() {
        console.log("A UPATE");
        return (
            <div>
                <h3>A{this.state.name}</h3><button onClick={this.btnClick}>updateName</button>
                <MyContext.Provider value={this.state.name}>
                    {
                        this.state.hasError ? <h3>子组件出错了</h3> : <B render={par => <C name={par} />}></B>
                    }

                    {/* <B render={par=><C name={par}/>}></B> */}
                </MyContext.Provider>
            </div>
        )
    }
}
class B extends PureComponent {
    // shouldComponentUpdate(nextProp,nextState){
    //     if (this.props.name===nextProp.name) {
    //         return false
    //     }
    //     return true
    // }
    state = {
        bname: "b组件name",
        users: "wode"
    }
    render() {
        console.log("B UPATE");
        return (
            <div>
                {
                    this.state.users.map(item => {
                        return <hi>{item.name}</hi>
                    })
                }
                <h3>B</h3>
                {this.props.render(this.state.bname)}
            </div>
        )
    }
}

//类式组件
class C extends PureComponent {
    static contextType = MyContext;//声明想要数据
    render() {
        console.log("C UPATE");
        return (
            <div>
                <h3>C{this.context}  renderProps：{this.props.name}</h3>
                <D></D>
            </div>
        )
    }
}

//函式组件
function D() {
    return (
        <div>

            {/* <h3>C{this.context}</h3> */}
            <MyContext.Consumer>
                {
                    value => {
                        return <h3>C{value}</h3>
                    }
                }
            </MyContext.Consumer>
        </div>
    )
}

