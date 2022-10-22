import logo from "./logo-small.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
  <header className="App-header">
  <img src={logo} className="App-logo img-fluid"
  alt="logo"/>
  <a href='#' className="btn bth-primary shadow">
Hello World!
  </a>
  </header>
    </div>
  );
}

export default App;
