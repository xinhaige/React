import React, {useEffect, useState,Component } from 'react'
import './index2.css'
import {
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons';

export default function MyCarousel(props) {
  let { list, width, height } = props;
  const count = list.length;//总个数
  width = width == undefined ? 500 : width;//宽
  height = height == undefined ? 300 : height;//高

  let [lateX, setLateX] = useState(0);
  let [num, setNum] = useState(0);
  let [ani, setAni] = useState("0.5s");


  const radioClick = (enent, obj) => {//中间lable
  }
  function prevDiv() {//上一个
    
  }
  function nextDiv() {//下一个
    let theNum=num+1;
    debugger
    if(theNum==5){
        setAni("none")
        setLateX(0*width);
        theNum=1
        setTimeout(()=>{
            setAni("0.5s")
            setLateX(theNum*width);
            setNum(theNum);
        },0)
    }else{
        setLateX(theNum*width);
        setNum(theNum);
    }
  }


  function mouseEnter() {//鼠标进入div
  }
  function mouseLeave() {//鼠标离开div
  }
  
  return (
    <div className='content' 
    style={{ width: width + "px", height: height + "px" }}
     onMouseEnter={mouseEnter} 
     onMouseLeave={mouseLeave}>
      <div className='lists'
      style={{transform:`translateX(-${lateX}px)`,transition:ani}}
      >
       <div className='list bg3'>4</div>

        <div className='list bg0'>1</div>
        <div className='list bg1'>2</div>
        <div className='list bg2'>3</div>
        <div className='list bg3'>4</div>

        <div className='list bg0'>1</div>
      </div>

    
      <input id="radio1" name='radio' type="radio" onClick={(event => { radioClick(event, 0) })} />
      <input id="radio2" name='radio' type="radio" onClick={(event => { radioClick(event, 1) })} />
      <input id="radio3" name='radio' type="radio" onClick={(event => { radioClick(event, 2) })} />
      <input id="radio4" name='radio' type="radio" onClick={(event => { radioClick(event, 3) })} />


      <div className='lables'>
       <label for="radio1"  className={num===0?"lable lableActive":"lable"} />
        <label for="radio2" className={num===1?"lable lableActive":"lable"} />
        <label for="radio3" className={num===2?"lable lableActive":"lable"} />
        <label for="radio4" className={num===3?"lable lableActive":"lable"} />
      </div>
      <span className='spanLeft' onClick={prevDiv} style={{ visibility: "visible"}}>
        <LeftOutlined />
      </span>
      <span className='spanRight' onClick={nextDiv} style={{ visibility:"visible"}}>
        <RightOutlined />
      </span>
    </div>
  )
}

// export default class Index2 extends Component {
//     state={
//         width:500,
//         count:4,
//         lateX:500,
//         ani:"0.5s",
//         num:1
//     }
//     nextDiv=()=>{
//        let theNum=this.state.num+1;
//       if(theNum==5){
//         debugger
//         this.setState({ani:"none",lateX:0},()=>{
//             setTimeout(()=>{this.setState({ani:"0.5s",lateX:500,num:1});},0)
//         })
//       }else{
//         this.setState({num:theNum,lateX:theNum*500})
//       }
//     }
//     radioClick=(a,b)=>{
 
//     }
//     render() {
//         let {lateX,ani,num}=this.state;
//     return (
//       <div className='content'>
//         <div className='lists'
//         style={{transform:`translateX(-${lateX}px)`,transition:ani}}
//         >
//          <div className='list bg3'>4</div>
  
//           <div className='list bg0'>1</div>
//           <div className='list bg1'>2</div>
//           <div className='list bg2'>3</div>
//           <div className='list bg3'>4</div>
  
//           <div className='list bg0'>1</div>
//         </div>
  
      
//         <input id="radio1" name='radio' type="radio" onClick={(event => { this.radioClick(event, 0) })} />
//         <input id="radio2" name='radio' type="radio" onClick={(event => { this.radioClick(event, 1) })} />
//         <input id="radio3" name='radio' type="radio" onClick={(event => { this.radioClick(event, 2) })} />
//         <input id="radio4" name='radio' type="radio" onClick={(event => { this.radioClick(event, 3) })} />
  
  
//         <div className='lables'>
//          <label for="radio1"  className={num===0?"lable lableActive":"lable"} />
//           <label for="radio2" className={num===1?"lable lableActive":"lable"} />
//           <label for="radio3" className={num===2?"lable lableActive":"lable"} />
//           <label for="radio4" className={num===3?"lable lableActive":"lable"} />
//         </div>
//         <span className='spanLeft' onClick={this.nextDiv} style={{ visibility: "visible"}}>
//           <LeftOutlined />
//         </span>
//         <span className='spanRight' onClick={this.nextDiv} style={{ visibility:"visible"}}>
//           <RightOutlined />
//         </span>
//       </div>
//     )
// }
// }
