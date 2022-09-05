import React, { useState, useEffect, Fragment } from 'react'
import { useParams, useLocation, useSearchParams, Outlet, Routes, Route } from 'react-router-dom'
import { Layout, Button, Dropdown, Menu, PageHeader, Row, Tag, Typography } from 'antd'
import myCss from './index.module.css'
import MyPageHeader from '../../components/MyPageHeader'
import MySider from '../../components/MySider'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementAsync, incrementByAmount } from '../../store/action'


import MyCarousel from '../../common/MyCarousel'
export default function Index() {
  let { pathname } = useLocation();

  const { Header, Footer, Sider, Content } = Layout;

  const count = useSelector(state => state.counter.value)

  const dispatch = useDispatch()

  useEffect(() => {
    // console.log(count);
  }, [count])

  function add() {
    dispatch(increment())
  }
  function del() {
    dispatch(increment())
  }
  function addNUM() {
    dispatch(incrementByAmount(2))
  }

  function addAsync() {
    dispatch(incrementAsync(2))
  }





  let [iscoll, setColl] = useState(false);
  const changeColl = (param) => {
    setColl(param);
  }


  return (
    <Layout className={myCss.homeLayout}>
      <Header className={myCss.header}>
        <MyPageHeader />
      </Header>
      <Layout>
        <Sider
          collapsed={iscoll}
        >
          <MySider setColl={changeColl} />
        </Sider>
        <Content>
          <div className={myCss.myCentent}>
            <div className={myCss.firstDiv}>
              <Button onClick={add}>add</Button>
              <Button onClick={del}>del</Button>
              <Button onClick={addAsync}>incrementAsync</Button>
              <Button onClick={addNUM}>addNUM</Button>
            </div>
            <div className={myCss.secondDiv}>
              <MyCarousel width={500} height={300} list={[{ txt: "lable1" ,classN:"bg0"}, { txt: "lable2" ,classN:"bg1"}, { txt: "lable3",classN:"bg2" }, { txt: "lable4" ,classN:"bg3"}]} />
            </div>
            <div className={myCss.threeDiv}>
            <Outlet />
            </div>
          </div>

        

        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  )
}
