import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {HashRouter,BrowserRouter} from 'react-router-dom' //路由

import store from './Redux/store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter> 
);

//检测redux store数据是否发生改变，改变则重新渲染组件
store.subscribe(()=>{
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter> 
   );
})
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
