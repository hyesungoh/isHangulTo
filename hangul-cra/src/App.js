import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [한글, set한글] = useState('asdfasdf');
  
  return (
    <div className="App">
      {한글}
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
