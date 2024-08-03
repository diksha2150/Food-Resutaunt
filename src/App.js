import "./App.css";
// import Home from "./pages/Home";
import Contact from "./pages/Contact";
import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import About from "./pages/About";
import { Menu } from "@mui/material";
import Layout from "./components/Layout/Layout";
import { Home } from "@mui/icons-material";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
