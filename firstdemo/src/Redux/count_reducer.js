

const initNum=0;
function reducerFun(preState=initNum,data){
    let {type,num}=data;
      switch (type) {
        case "add":
            return preState+num;
           case  "del":
            return preState-num;
        default:    
           return preState;
      }
}

export default reducerFun
