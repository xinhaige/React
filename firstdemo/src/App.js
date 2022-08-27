import logo from './logo.svg';
import './App.css';
import Demo1 from './component/Demo1'
import Demo2 from './component/Demo2'
import Demo3 from './component/Demo3'
import Demo3Main from './component/Demo3Main'
import Demo7FuncHOOK from './component/Demo7FuncHOOK'

import Demo5Route from './pages/Demo5Route' //路由


import Demo6rudex from './component/Demo6rudex' //前端ui 与下面的发生联系
import Demo6 from './containers/demo6' //容器

import Demo6UIandView from './containers/demo6UIandView'//等于上面两个文件
import UserContainer from './containers/userContainer'

import store from './Redux/store'

import Demo4 from './component/Demo4PubSubJS'
import Demo4C from './component/Demo4PubSubJS_C'
function App() {
     
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactzzzz
        </a>
        <div className="appDiv1">
          <div>
            <Demo1/>
            <Demo2/> 
            <Demo3/> 
            <Demo3Main/>
            <Demo4/>
            <Demo4C/>
            <Demo4/>
            <Demo4C/>
            <Demo7FuncHOOK/>
          </div>
          <div>
          <Demo5Route/>

          {/* <Demo6rudex/> */}
          {/* <Demo6 store={store}/>  index.js 已经帮你传了*/ }
          {/* <Demo6/> */}
          <Demo6UIandView/>
          <UserContainer/>
          </div>
        </div>
       
      </header>
    </div>
  );
}

export default App;
