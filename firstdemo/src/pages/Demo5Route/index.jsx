import React, { Component, lazy, Suspense} from 'react'
import { Link, HashRouter, Route, Routes, useParams, useNavigate, Navigate, useRoutes } from 'react-router-dom' //路由
//import Home from '../Home'
// import About from '../About'
import './index.css'

//const Home=lazy(()=>import("../Home"))  //懒加载 配合Suspense 使用
const About = lazy(() => import("../About")) //懒加载

export default function Index() {
  let obj={
    home:lazy(()=>import("../Home"))
  }
  // LazyImportComponent = (props: {
  //   lazyChildren: LazyExoticComponent<(lazy(()=>import("../Home"))) => JSX.Element>;
  // }) => {
  //   return (
  //     <React.Suspense fallback={<GlobalLoading />}>
  //       <props.lazyChildren />
  //     </React.Suspense>
  //   );
  // };

     let mydata=[
      {
        name:"Home",
        path:"/home/:id"
        },{
          name:"About",
        path:"/about"
        }
     ]
     let routers=mydata.map(item=>{
       let arr={
          ...item,
          com:lazy(()=>import(`../${item.name}`))
       }
       return {
        path:arr.path,
        element: <arr.com/>
       }
     })
     console.log("mydata",routers)
  // let routers = [{
  //    path: "/home/:id",
  //    element: Home
  //    },
  //    {
  //     path: "/about",
  //     element: <About />
  //    },{
  //     path: "/",
  //     element: <Navigate to="/home" />
  //    }
  //   ]


    let element=useRoutes(routers);

    function btnClick(){

    }
  return  (
    <div>
      <h2>a连接</h2>
      <Link to="/home/5">Home</Link>
      <Link to={{ pathname: "/about", state: { id: 8, name: "wode" } }} >About</Link>
      <div>
        <h2>页面</h2>

       <Suspense fallback={<h1>loading</h1>}>
          {element}
        </Suspense> 
        
        <button onClick={btnClick}>跳转</button>
      </div>
    </div>
  )
}







class ClassCOM extends Component {


  state = {
    currentComponent: null
  }
  constructor(props) {
    super(props)

    //第二个思路
    debugger
    const cname = "Home";
    let MyCompoments = {};
    MyCompoments[cname] = lazy(() => import(`../${cname}`))
    this.MyCompoments = MyCompoments;

    // //let ReqHome=require("../Home").default
    // console.log("ReqHome")
    // const Comp = require('../Home').default;
    // console.log("Comp",Comp)
    // const Comps = <Comp/>
    // console.log("Comps",Comps)
    // console.log("this",this)
    // this.setState({currentComponent:Comps})

  }
  render() {
    let MyC = this.MyCompoments;//所有的自定义组件
    const cname = "Home";
    let TheC = MyC[cname];

    return (
      <div>
        <h2>a连接</h2>
        <Link to="/home/5">Home</Link>
        <Link to={{ pathname: "/about", state: { id: 8, name: "wode" } }} >About</Link>
        <div>
          <h2>页面</h2>
          <Suspense fallback={<h1>loading</h1>}>
            <Routes>
              <Route path='/home/:id' element={<TheC />} />
              {/* <Route path='/home/:id' element={ <Navigate to="/about" />}/> */}
              <Route path='/about' element={<About />} />
            </Routes>
          </Suspense>
          <button onClick={this.btnClick}>跳转</button>
        </div>
      </div>
    )
  }
  btnClick = () => {
    //let x=require("../Home").default;
    //return <Navigate to="/about" />;
    return <Navigate to="/about" />;
  }
  componentDidMount() {

  }
}
