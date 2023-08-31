import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import PopUpPage from "./pages/PopUpPage"; // Importez correctement le chemin du composant PopUpPage



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popUp" element={<PopUpPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
