import react from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ReactUI from "./Projects/ReactUI";
import FigmaUI from "./Projects/FigmaUI";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reactUI" element={<ReactUI />} />
            <Route path="/figmaUi" element={<FigmaUI />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
