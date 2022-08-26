//正常是 store.dispatch({type,num}) 执行下面的方法
//如果传入的不是objec对象，而是函数（定时函数、异步函数）  则store挂在这个函数并将dispatch 传入函数中，在用传入的dispatch执行键值对obj

//这里的函数只能是 纯函数  
//redux的reducer函数必须是一个纯函数
//纯函数
//1.一类特别的函数:只要是同样的输入(实参)，必定得到同样的输出(返回)e2．必须遵守以下一些约束
//1.不得改写参数数据
//2.不会产生任何副作用，例如网络请求，输入和输出设备3)不能调用Date.now()或者Math.random()等不纯的方法3. 
//preState.push(object) 数组还是原来的数组 redux识别不到更新
const users=[{name:"user1",id:1}]
function reducerFun(preState=users,data){
    let {type,userObj}=data;
      switch (type) {
        case "add":
            return [...preState,userObj] 
        default:    
           return preState;
      }
}

export default reducerFun
