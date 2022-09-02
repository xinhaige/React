import React from 'react'
import myCss from './index.module.css'
import {Breadcrumb,Avatar} from 'antd'
import {useLocation} from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Index() {
    const {pathname}=useLocation();
    const names=pathname.split("/");
    const {name}=useSelector(state=>state.user.user);
    const lname=localStorage.getItem("name");
    
    names.shift()
    return (
        <div className={myCss.div1}>
            <div className={myCss.headInfo}>
            <Avatar className={myCss.headImg} size={50} src={require("../../Imgs/yasuo.jpg")} />
            <span className={myCss.spanName}>{name?name:lname}</span>
            </div>
            <div className={myCss.breadcrumb}>
                <Breadcrumb separator=">>">
                    {
                        names.map((item)=>{
                             return <Breadcrumb.Item>{item}</Breadcrumb.Item>
                        })
                    }
                    {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">Application Center</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">Application List</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>An Application</Breadcrumb.Item> */}
                </Breadcrumb>
            </div>
        </div>
    )
}
