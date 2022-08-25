import React, { Component } from 'react'
import {Link,HashRouter,Route,Routes} from 'react-router-dom' //路由
import Home from '../Home'
import About from '../About'
import './index.css'

export default class index extends Component {
  render() {
    return (
     <div>
       <h2>a连接</h2>
      <Link to={"/home/wode"} >Home</Link>
         <Link to="/about" >About</Link> 
       <div>
        <h2>页面</h2>
        <Routes>
        <Route path='/home' element={<Home/>}  />
        <Route path='/about' element={<About/>}/>
        </Routes>
       </div>
     </div>
    )
  }
}
