// COMPONENTS
import Header from "./components/Header";
import About from "./components/About";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Experience />
      <h1 className="project-heading" id="project-heading">
        <span>03.</span> <span>Some of my implimentations</span>
      </h1>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
