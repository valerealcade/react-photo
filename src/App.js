import logo from './logo.svg';
import './App.css';
import Display from './Display';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <p>
          Photos Alicia
        </p>
        <div>
        <Display></Display>
      </div>        
        {/* <a
          className="App-link"
          href="http://valere.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          valere
        </a> */}
      </header>
    </div>
  );
}

export default App;
