import { Route, Routes } from "react-router-dom";

import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Resume from "./Pages/Resume/Resume";
import Projects from "./Pages/Projects/Projects";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />

        <Route path="*" element={<></>} />
      </Routes>
    </div>
  );
}

export default App;
