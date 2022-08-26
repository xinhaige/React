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


let con=connect(mapStateToProps,mapDispatchToProps)(demoUi);
export default con;