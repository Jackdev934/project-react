import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Bosses from './pages/Bosses';
import Characters from './pages/Characters';
import Weapons from './pages/Weapons';
import World from './pages/World';
import Lore from './pages/Lore';
import Guides from './pages/Guides';
import Community from './pages/Community';
import Sign from './pages/Sign';

import {BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="bosses" element={<Bosses />} />
          <Route path="characters" element={<Characters />} />
          <Route path="weapons" element={<Weapons />} />
          <Route path="world" element={<World />} />
          <Route path="lore" element={<Lore />} />
          <Route path="guides" element={<Guides />} />
          <Route path="community" element={<Community />} />
          <Route path="sign" element={<Sign />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}