import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";

export default function SiteRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route>
        <Route exct path="/about" element={<About />} />
        <Route exact path="/roadmap" element={<About />} />
        <Route exact path="/ecosystem" element={<About />} />
        <Route exact path="/whitepaper" element={<About />} />
        <Route exact path="/audit" element={<About />} />
        <Route exact path="/hogenetworks" element={<About />} />
      </Route>
    </Routes>
  );
}
