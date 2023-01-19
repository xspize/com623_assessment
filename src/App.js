import logo from './logo.svg';
import GlobalStyles from "./config/GlobalStyles";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GlobalStyles />
        <p>
          Test, Hello!
        </p>
      </header>
    </div>
  );
}

export default App;
