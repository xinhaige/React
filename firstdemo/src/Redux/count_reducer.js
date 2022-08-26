//正常是 store.dispatch({type,num}) 执行下面的方法
//如果传入的不是objec对象，而是函数（定时函数、异步函数）  则store挂在这个函数并将dispatch 传入函数中，在用传入的dispatch执行键值对obj

const state=0
function reducerFun(preState=state,data){
    let {type,num}=data;
      switch (type) {
        case "add":
            return num++;
        case  "del":
            return num--;
        default:    
           return preState;
      }
}

export default reducerFun
