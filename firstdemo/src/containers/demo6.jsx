//引入前端ui
import demoUi from '../component/Demo6rudex';
import {addAction,delAction,addAsyncAction} from '../Redux/count_action'
import {connect} from 'react-redux'
import { func } from 'prop-types';

function mapStateToProps(state){
    return {num:state};
}
function mapDispatchToProps(dispatch) {
    return {
        add:Num=> dispatch(addAction(Num)),//最原始的调用 store.dispatch({type,num})  
        del:Num=> dispatch(delAction(Num)),
        addAsync:(Num,time)=> dispatch(addAsyncAction(Num,time)),//异步方法
        addAsyncAction:(num,time)=>dispatch((fun)=>{//异步方法 第二种写法     
            debugger
            return setTimeout(()=>{
                fun(addAction(num))
            },time)
            
        })  
    }
}

//原始
//let con=connect(mapStateToProps,mapDispatchToProps)(demoUi);
//简写1
// let con=connect(
//     state=>({num:state}),
//    dispatch=> ({
//          add:Num=> dispatch(addAction(Num)),//最原始的调用 store.dispatch({type,num})  
//          del:Num=> dispatch(delAction(Num)),
//          addAsync:(Num,time)=> dispatch(addAsyncAction(Num,time))
//        })
//     )(demoUi);

//优化三
//react-redux api优化 会调dispatch   即第二个参数可以是对象
    let con=connect(
        state=>({num:state}),
        {
             add:addAction,//最原始的调用 store.dispatch({type,num})  
             del:delAction,
             addAsync:addAsyncAction,
             addAsyncAction:addAsyncAction
        }
     )(demoUi);
export default con;