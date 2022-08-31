import './App.css';
import 'antd/dist/antd.css';
import routers from './router';
import {NavLink,useRoutes} from 'react-router-dom'

function App() {
  let element=useRoutes(routers);
  return (
    <div className="App">
      {element}
    </div>
  );
}

export default App;
