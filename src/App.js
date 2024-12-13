import "./App.css";
import AboutMe from "./components/about-me";
import Navbar from "./components/nav-bar";
import Proyects from "./components/proyects";

function App() {
  return (
    <div className="App">
      {" "}
      <Navbar />
      <body className="App-header">
        <AboutMe />
        <Proyects />
      </body>
    </div>
  );
}

export default App;
