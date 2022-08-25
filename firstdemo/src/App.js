import logo from './logo.svg';
import './App.css';
import Demo1 from './component/Demo1'
import Demo2 from './component/Demo2'
import Demo3 from './component/Demo3'
import Demo3Main from './component/Demo3Main'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactzzzz
        </a>
        <Demo1/>
        <Demo2/> 
        <Demo3/> 
        <Demo3Main/>
      </header>
    </div>
  );
}

export default App;
