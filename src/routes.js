import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Team from "./pages/Team/Team";
import Gaming from "./pages/Gaming/Gaming";
import About from "./pages/About/About";
import ContractInfo from "./pages/Contracts/Contracts.tsx"

export default function SiteRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route>
        <Route exact path="/gaming" element={<Gaming />} />
        <Route exct path="/team" element={<Team />} />
        <Route exct path="/about" element={<About />} />
        <Route exact path="/roadmap" element={<About />} />
        <Route exact path="/whitepaper" element={<About />} />
        <Route exact path="/audit" element={<About />} />
        <Route exact path="/hogenetworks" element={<About />} />
        <Route exact path="/contracts" element={<ContractInfo />} />
      </Route>
    </Routes>
  );
}

export const menuItems = [
  { page: "home" },  
  { page: "gaming" },
  { page: "about" },
  { page: "contracts"}
  /*
  { page: "team" },
  {
    k: "about",
    pages: ["about", "roadmap"]
  }
  */
];
