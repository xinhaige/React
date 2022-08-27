import React, { Component,lazy,Suspense} from 'react'
import {Link,HashRouter,Route,Routes,useParams,useNavigate,Navigate} from 'react-router-dom' //路由
// import Home from '../Home'
// import About from '../About'
import './index.css'

const Home=lazy(()=>import("../Home"))  //懒加载 配合Suspense 使用
const About=lazy(()=>import("../About")) //懒加载

export default class index extends Component {

  render() {
    return (
      <div>
        <h2>a连接</h2>
       <Link to="/home/5">Home</Link>
          <Link to={{pathname:"/about",state:{id:8,name:"wode"}}} >About</Link> 
        <div>
         <h2>页面</h2>
         <Suspense fallback={<h1>loading</h1>}>
            <Routes>
             <Route path='/home/:id' element={<Home/>}  />
             <Route path='/about' element={<About/>}/>
            </Routes>
         </Suspense>
         <button onClick={this.btnClick}>跳转</button>
        </div>
      </div>
     )
  }
  btnClick=()=>{
    return <Navigate to="/about" />;
  }
  componentDidMount(){
    
  }
}
