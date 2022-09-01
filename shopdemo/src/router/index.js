import {Navigate} from 'react-router-dom'
import Home  from '../pages/Home'
import Login  from '../pages/Login'

import Page1  from '../pages/Page1'
import Page2  from '../pages/Page2'

let list=[
    {
        path:'/home',
        element:<Home></Home>,
        children:[
            {
                path:'page1',
                element:<Page1></Page1>,
            },
            {
                path:'page2',
                element:<Page2></Page2>,
            }
        ]
    },{
        path:'/login',
        element:<Login></Login>
    },{
        path:'/',
        element:<Navigate to="/login"/>
    }
]
export default list