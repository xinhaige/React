import React, { useState } from 'react'
import myCss from './index.module.css'
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import {useNavigate} from 'react-router-dom'


function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

export default function Index() {
    let navigate=useNavigate();
    const items = [
        getItem('菜单  1', 'Page1', <PieChartOutlined />),
        getItem('菜单  2', 'Page2', <DesktopOutlined />),
    ];
    const onClick=({ item, key, keyPath, domEvent })=>{
        navigate(`/home/${key}`);
    }
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        console.log("@@@");
        setCollapsed(!collapsed);
    };

    const [openKeys, setOpenKeys] = useState([]);
    const onOpenChange = (keys) => {
        if (keys==undefined||keys.lenght===0) {
            setOpenKeys([]);
        }else{
            const clickMenu=keys.pop();
            setOpenKeys([clickMenu]);
        }
    };
    return (
        <div
            style={{
                width: '100%',
            }}
        >
            <Button
                type="primary"
                onClick={toggleCollapsed}
                style={{
                    marginBottom: 16,
                }}
            >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={items}
                className={myCss.meun}
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                onClick={onClick}
            />
        </div>
    )
}
