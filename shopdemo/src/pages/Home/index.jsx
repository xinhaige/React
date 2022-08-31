import React from 'react'
import { useParams, useLocation, useSearchParams,Outlet } from 'react-router-dom'
import { Layout, Button, Dropdown, Menu, PageHeader, Row, Tag, Typography } from 'antd'
import myCss from './index.module.css'
import MyPageHeader from '../../components/MyPageHeader'
import MySider from '../../components/MySider'

export default function Index() {
  // let {state:{a,b}}=useLocation();
  // console.log("loc",a);
  // console.log("loc",b);
  const { Header, Footer, Sider, Content } = Layout;


  return (
    <Layout className={myCss.homeLayout}>
      <Header className={myCss.header}>
        <MyPageHeader/>
      </Header>
      <Layout>
        <Sider><MySider/></Sider>
        <Content> 
          <Outlet/>
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  )
}
