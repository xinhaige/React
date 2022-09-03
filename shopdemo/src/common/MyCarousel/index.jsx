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

  let [currentIndex, setX] = useState(1);
  let [isPlay, setPlay] = useState(true);
  function prevDiv() {//上一个
    currentIndex=currentIndex<=0?3:currentIndex-1;
    setX(currentIndex);
  }
  function nextDiv() {//下一个
    currentIndex=currentIndex-3>=0?0:currentIndex+1;
    setX(currentIndex);
  }
  useEffect(() => {
    if(isPlay){
      let timer=setInterval(()=>{
        nextDiv();
      },1500)
      return ()=>{
        clearInterval(timer);
      }
    }
  }, [isPlay])

  function mouseEnter() {//鼠标进入div
    setPlay(false)
  }
  function mouseLeave() {//鼠标离开div
    setPlay(true)
  }
  const radioClick = (enent, obj) => {//中间lable
    setX(obj);
  }

  return (
    <div className='content' 
    style={{ width: width + "px", height: height + "px" }}
     onMouseEnter={mouseEnter} 
     onMouseLeave={mouseLeave}>
      <div className='lists'
        style={{ transform: "translateX(-" + (currentIndex * width) + "px)", transition: "1s" }}>
        <div className='list bg1'>1</div>
        <div className='list bg2'>2</div>
        <div className='list bg3'>3</div>
        <div className='list bg4'>4</div>
      </div>

      <input id="radio1" name='radio' type="radio" onClick={(event => { radioClick(event, 0) })} />
      <input id="radio2" name='radio' type="radio" onClick={(event => { radioClick(event, 1) })} />
      <input id="radio3" name='radio' type="radio" onClick={(event => { radioClick(event, 2) })} />
      <input id="radio4" name='radio' type="radio" onClick={(event => { radioClick(event, 3) })} />


      <div className='lables'>
        <label for="radio1" className={currentIndex===0?"lable lableActive":"lable"} />
        <label for="radio2" className={currentIndex===1?"lable lableActive":"lable"} />
        <label for="radio3" className={currentIndex===2?"lable lableActive":"lable"} />
        <label for="radio4" className={currentIndex===3?"lable lableActive":"lable"} />
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
