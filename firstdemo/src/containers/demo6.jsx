//引入前端ui
import demoUi from '../component/Demo6rudex';


import {connect} from 'react-redux'
import { func } from 'prop-types';

function a(){
    return {name:"wode"};
}
function b() {
    return {add:()=>{console.log("add")}}
}


let con=connect()(demoUi);
export default con;