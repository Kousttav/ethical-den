import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;