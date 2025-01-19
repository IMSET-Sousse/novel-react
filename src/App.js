import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Plot from "./components/Plot";
import Characters from "./components/Characters";
import Gallery from "./components/Gallery";
import Author from "./components/Author";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/plot" element={<Plot />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/author" element={<Author />} />
      </Routes>
    </Router>
  );
};

export default App;
