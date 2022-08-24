import logo from './logo.svg';
import './App.css';
import Demo1 from './component/Demo1'
import Demo2 from './component/Demo2'

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
      </header>
    </div>
  );
}

export default App;
