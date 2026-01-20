import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainSections from "./components/MainSections";

import Project from "./pages/Project";
import Internship from "./pages/Internship";
import Certification from "./pages/Certification";
import Reflection from "./pages/Reflection";
import Resume from "./pages/Resume";
import Declaration from "./pages/Declaration";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* One-page sections */}
        <Route path="/" element={<MainSections />} />

        {/* Separate pages */}
        <Route path="/project" element={<Project />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/reflection" element={<Reflection />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/declaration" element={<Declaration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
