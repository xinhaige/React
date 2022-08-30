import './App.css';

import routers from './router';
import {NavLink,useRoutes} from 'react-router-dom'

function App() {
  let element=useRoutes(routers);
  return (
    <div className="App">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <br/>
      {element}
    </div>
  );
}

export default App;
