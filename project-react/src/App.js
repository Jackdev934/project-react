import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Bosses from "./pages/Bosses";
import Characters from "./pages/Characters";
import Weapons from "./pages/Weapons";
import World from "./pages/World";
import Lore from "./pages/Lore";
import Guides from "./pages/Guides";
import Community from "./pages/Community";
import About from "./pages/About";
import Sign from "./pages/Sign";

import "./App.css";

function Layout() {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="bosses" element={<Bosses />} />
          <Route path="characters" element={<Characters />} />
          <Route path="weapons" element={<Weapons />} />
          <Route path="world" element={<World />} />
          <Route path="lore" element={<Lore />} />
          <Route path="guides" element={<Guides />} />
          <Route path="community" element={<Community />} />
          <Route path="about" element={<About />} />
          <Route path="sign" element={<Sign />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL || "/"}>
      <Routes>
        <Route path="/*" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}
