import logo from './logo.svg';
import './App.css';

import { Button } from 'antd';
import 'antd/dist/antd.css';
import routers from './router';
import {NavLink,useRoutes} from 'react-router-dom'

function App() {
  let element=useRoutes(routers);
  return (
    <div className="App">
     <Button type="primary">Button</Button>

      <NavLink to="/home">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <br/>
      {element}
    </div>
  );
}

export default App;
