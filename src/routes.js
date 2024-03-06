import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Team from "./pages/Team/Team";
import Gaming from "./pages/Gaming/Gaming";
import About from "./pages/About/About";
import Defi from "./pages/Defi/Defi";
import Print from "./pages/Print/Print";
import Faq from "./pages/Faq/Faq";
import ChangeNow from "./pages/ChangeNow/ChangeNow";

export default function SiteRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route>
        <Route exact path="/defi" element={<Defi />} />
        {/*<Route exact path="/gaming" element={<Gaming />} />*/}
        {/*<Route exact path="/team" element={<Team />} />*/}
        <Route exact path="/print" element={<Print />} />
        <Route exact path="/changenow" element={<ChangeNow />} />
        <Route exact path="/faq" element={<Faq />} />
        <Route exact path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export const menuItems = [
  { page: "home" },
  { page: "defi" },
  { page: "print" },
  { page: "changenow" },
  { page: "faq" },
  { page: "about" },
  { k: "Proposals", url: "https://snapshot.org/#/optiswappro.eth" }
  /*
  { page: "team" },
  {
    k: "about",
    pages: ["about", "roadmap"]
  }
  */
];
