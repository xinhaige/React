import {Navigate} from 'react-router-dom'
import Home  from '../pages/Home'
import Login  from '../pages/Login'


let list=[
    {
        path:'/Home',
        element:<Home></Home>
    },{
        path:'/Login',
        element:<Login></Login>
    },{
        path:'/',
        element:<Navigate to="/Home"/>
    }
]
export default list