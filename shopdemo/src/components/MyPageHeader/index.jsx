import React from 'react'
import myCss from './index.module.css'
import {Breadcrumb,Avatar} from 'antd'
import {useLocation} from 'react-router-dom'


export default function Index() {
    const {pathname}=useLocation();
    const names=pathname.split("/");
    names.shift()
    return (
        <div className={myCss.div1}>
            <div className={myCss.headInfo}>
            <Avatar className={myCss.headImg} size={50} src={require("../../Imgs/yasuo.jpg")} />
            <span className={myCss.spanName}>Welcome</span>
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
