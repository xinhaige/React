import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {HashRouter,BrowserRouter} from 'react-router-dom' //路由

import {Provider} from 'react-redux'//会把store参数 传给每一个容器
import store from './Redux/store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <Provider store={store}>  
        <BrowserRouter>
          <App />
        </BrowserRouter> 
    </Provider>
);

//检测redux store数据是否发生改变，改变则重新渲染组件
//使用react-redux 容器会自己检测
// store.subscribe(()=>{
//   root.render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter> 
//    );
// })
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
