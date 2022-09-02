import './App.css';
import 'antd/dist/antd.css';
import routers from './router';
import { NavLink, useRoutes, Routes, Route,Navigate } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'


function App() {
  let user=useSelector(state=>state.user.user)
  let isLogin=localStorage.getItem("isLogin")==="true"?true:false;
  //生成路由 没登陆则回到login
  const list=routers.map(Item=>{
     return {
        ...Item,
        children:Item.children==undefined?null:Item.children.map(child=>{
          return {
            ...child,
            element:isLogin?child.element:<Navigate to="/login"/>
          }
        })
     }
 })

 let element = useRoutes(list);
  return (
    <div className="App">
    {element}
    </div>
  );
}

export default App;
