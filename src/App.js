import logo from './viadance_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         In development
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/viadancestudio"
          target="_blank"
          rel="noopener noreferrer"
        >
          You can visit our Instagram Page meanwhile
        </a>
      </header>
    </div>
  );
}

export default App;
