import logo from './logo.svg';
import './App.css';

function App() {//Test class
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bye from Life on the run!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React from UDEMY
        </a>
      </header>
    </div>
  );
}

export default App;
