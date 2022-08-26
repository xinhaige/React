import React, { Component,useEffect } from 'react'
import {useParams} from 'react-router-dom'
import './index.css'

export default function Home(){
   let  params= useParams();
  
   useEffect(() => {
    console.log("params",params); // {id: '123'}

  }, []);

   return (
    <div>
    <h1>这是home页面</h1>
    </div>
   )
}



// export default class index extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//       <h1>这是home页面</h1>
//    </div>
//      )
//   }
//   componentDidMount(){
//     debugger
//     let par=this.props;
//     console.log(par);
//   }
// }
