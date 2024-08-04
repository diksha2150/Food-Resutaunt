import "./App.css";

import Contact from "./pages/Contact";
import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
