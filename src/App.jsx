import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";

import "./styles.css";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Explore from "./Explore";

export default function App() {
  return (
    <>
      <div id="app-main">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/explore" element={<Explore />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}
