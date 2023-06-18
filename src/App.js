// COMPONENTS
import Header from "./components/Header"
import About from "./components/About";
import Main from  "./components/Main"
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <h1 className="project-heading" id="project-heading">Some Of My Implementations</h1>
      <Projects />
      <Experience/>
      <Footer />
    </div>
  );
}

export default App;
