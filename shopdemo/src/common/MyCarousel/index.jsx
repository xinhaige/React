import React, { useRef, useEffect, useState } from 'react'
import './index.css'
import {
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons';

export default function MyCarousel(props) {
  let { list, width, height } = props;
  const count = list.length;//总个数
  width = width == undefined ? 500 : width;//宽
  height = height == undefined ? 300 : height;//高

  let [isPlay, setPlay] = useState(true);

  let [currentIndex, setIndex] = useState(0);
  let [lists,setList]=useState(list);
  useEffect(()=>{
    if(isPlay){
      let  timer= setInterval(()=>{
        nextDiv();
      },1500)
      return ()=>{
        clearInterval(timer)
      }
    }
  },[currentIndex,isPlay])

  const radioClick = (enent, obj) => {//中间lable
    radioClickIndex(currentIndex,obj);
  }
  function prevDiv() {//上一个
    let index=currentIndex===0?count-1:currentIndex-1;
    computeIndex(currentIndex,index,false);
  }
  function nextDiv() {//下一个
    let index=currentIndex===count-1?0:currentIndex+1;
    console.log(currentIndex,index);
    computeIndex(currentIndex,index,true);
  }
  
  function radioClickIndex(current,next){
    const newlist=lists.map((item,index)=>{
      let zindex=0,ani=false,lateX=(index-next)*width;
      if(index===next){
        ani=true;
        zindex=2;
      }else if(index===current){
        ani=true;
      }
      return{
        zindex,lateX,ani,
        txt:item.txt,
        classN:item.classN
      }
    })
    setList(newlist);
    setIndex(next);
  }
  function computeIndex(current,next,isRight){
    const newlist=lists.map((item,index)=>{
      let zindex=0,lateX=0,ani=false;
      if (index===current) {
         ani=true;
         lateX=isRight?-1*width:1*width;
      }else if(index===next){
        ani=true;
        lateX=0*width;
        zindex=2;
      }else{
          if (isRight&&next===count-1&&index===0) {
            lateX=1*width;
          } else if(!isRight&&next===0&&index===count-1) {
            lateX=-1*width;
          }else{
            lateX=(index-next)*width;
          }
      }
      return{
        zindex,lateX,ani,
        txt:item.txt,
        classN:item.classN
      }
    })
    console.log("object");
    console.log(next);
    setList(newlist);
    setIndex(next);
  }

  function mouseEnter() {//鼠标进入div
    setPlay(false)
  }
  function mouseLeave() {//鼠标离开div
    setPlay(true)
  }
  
  return (
    <div className='content' 
    style={{ width: width + "px", height: height + "px" }}
     onMouseEnter={mouseEnter} 
     onMouseLeave={mouseLeave}>
      <div className='lists'>
        {lists.map((item,index)=>{

            return <div className={'list '+item.classN} style={{transform:`translateX(${item.lateX}px)`,  transition:item.ani?"0.5s":"none",zIndex:item.zindex}}>{item.txt}</div>
        })}
        {/* <div className='list bg0' style={{transform: "translateX(-0px)",  transition:"none",zIndex:0}}>1</div>
        <div className='list bg1' style={{transform: "translateX(500px)" ,transition:"none",zIndex:0 }}>2</div>
        <div className='list bg2' style={{transform: "translateX(1000px)",transition:"none",zIndex:0 }}>3</div>
        <div className='list bg3' style={{transform: "translateX(1500px)",transition:"none",zIndex:0 }}>4</div> */}
      </div>

      {lists.map((item,index)=>{
return <input id={"radio"+index} name='radio' type="radio" onClick={(event => { radioClick(event, index) })}/>
})}
      {/* <input id="radio1" name='radio' type="radio" onClick={(event => { radioClick(event, 0) })} />
      <input id="radio2" name='radio' type="radio" onClick={(event => { radioClick(event, 1) })} />
      <input id="radio3" name='radio' type="radio" onClick={(event => { radioClick(event, 2) })} />
      <input id="radio4" name='radio' type="radio" onClick={(event => { radioClick(event, 3) })} /> */}


      <div className='lables'>
        {/* <label for="radio1" className={currentIndex===0?"lable lableActive":"lable"} />
        <label for="radio2" className={currentIndex===1?"lable lableActive":"lable"} />
        <label for="radio3" className={currentIndex===2?"lable lableActive":"lable"} />
        <label for="radio4" className={currentIndex===3?"lable lableActive":"lable"} /> */}
        {lists.map((item,index)=>{
return <label for={"radio"+index} className={currentIndex===index?"lable lableActive":"lable"} />
})}
      </div>
      <span className='spanLeft' onClick={prevDiv} style={{ visibility: isPlay?"hidden":"visible" }}>
        <LeftOutlined />
      </span>
      <span className='spanRight' onClick={nextDiv} style={{ visibility:isPlay?"hidden":"visible"  }}>
        <RightOutlined />
      </span>
    </div>
  )
}
