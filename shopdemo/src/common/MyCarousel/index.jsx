import React, { useRef, useEffect, useState } from 'react'
import './index.css'
import {
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons';

export default function MyCarousel(props) {
  debugger
  let {list,width,height}=props;
  const count=list.length;//总个数
  width=width==undefined?500:width;//宽
  height=height==undefined?300:height;//高


  const lists = useRef()
  let [state, setState] = useState({ isspen: false, lableName: '' ,isAni:true})
  let num = 1;

  useEffect(() => {
    if(state.isAni){
      let timer=setInterval(() => {
        lists.current.style.transition = '0.5s';
        lists.current.style.transform = 'translateX(-' + (num - 1) * width + 'px)'
        num++;
      }, 1500)
       return ()=>{
        clearInterval(timer);
       }
    }
  }, [state.isAni])

  function transitionEnd() {
    if (num >count+1) {
      lists.current.style.transition = 'none';
      lists.current.style.transform ='translateX(0px)'
      num = 2
    }
  }
  function mouseEnter() {
    setState({ isspen: true,isAni:false })
  }
  function mouseLeave() {
    setState({ isspen: false, lableName: "" ,isAni:true})
  }

  function prevDiv() {
    num = num ==1 ? count : num-1;
    currentDiv();
  }
  function nextDiv() {
    num = num ==count ? 1 : num+1;
    currentDiv();
  }

  const radioClick = (enent, obj) => {
    num = obj;
    currentDiv();
    setState({ lableName: "radio" + obj })
  }

  function currentDiv() {
    lists.current.style.transition = '0.5s';
    lists.current.style.transform = 'translateX(-' + (num - 1) * width + 'px)'
  }
  return (
    <div className='content' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <div className='lists' ref={lists} onTransitionEnd={transitionEnd} >
        {/* <div className='list bg1'>1</div>
        <div className='list bg2'>2</div>
        <div className='list bg3'>3</div>
        <div className='list bg1'>1</div> */}
        {
          list.map((item,index)=>{
            return  <div className={'list bg'+((index+1)>3?index-2:index+1)}>{item.txt}</div>
          })
        }
        <div className='list bg1'>{list[0].txt}</div>

      </div>

      {/* <input id="radio1" name='radio' type="radio" onClick={(event => { radioClick(event, 1) })} />
      <input id="radio2" name='radio' type="radio" onClick={(event => { radioClick(event, 2) })} />
      <input id="radio3" name='radio' type="radio" onClick={(event => { radioClick(event, 3) })} /> */}
      {list.map((item,index)=>{
            return <input id={"radio"+(index+1)} name='radio' type="radio" onClick={(event => { radioClick(event, index+1) })} />
          })}

      <div className='lables'>
        {/* <label for="radio1" className={state.lableName === "radio1" ? "lable lableActive" : "lable"} />
        <label for="radio2" className={state.lableName === "radio2" ? "lable lableActive" : "lable"} />
        <label for="radio3" className={state.lableName === "radio3" ? "lable lableActive" : "lable"} /> */}
         {
          list.map((item,index)=>{
            return <label for={"radio"+(index+1) } className={state.lableName === "radio"+(index+1) ? "lable lableActive" : "lable"} />
          })
        }
      </div>
      <span className='spanLeft' onClick={prevDiv} style={{ visibility: state.isspen ? 'visible' : 'hidden' }}>
        <LeftOutlined />
      </span>
      <span className='spanRight' onClick={nextDiv} style={{ visibility: state.isspen ? 'visible' : 'hidden' }}>
        <RightOutlined />
      </span>
    </div>
  )
}
