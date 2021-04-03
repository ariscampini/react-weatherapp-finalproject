import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCityName="Madrid"/>
      <footer>
        This project was coded by Arianna Scampini and is {" "}
      <a className= "footer" rel="noreferrer"  href="https://github.com/ariscampini/react-weatherapp-finalproject" 
      target="_blank">open source on GitHub</a>
      </footer>
      </div>
    </div>
  );
}

export default App;
