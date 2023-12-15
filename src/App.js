import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div >
     <Navbar />
     <Home />
     <About />
     <Skills />
     <Projects />
     <Contact/>
    </div>
  );
}

export default App;
