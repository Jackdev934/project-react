// src/pages/World.jsx
import "../css/World.css";
import ImageGrid from "../components/Image Grid";

/* ========= Image Imports ========= */
import firelink from "../images/world images/firelink.jpeg";
import cemetary from "../images/world images/cemetary.jpeg";
import lothric from "../images/world images/lotheric.jpeg";
import undead from "../images/world images/undead.jpeg";
import sacrifices from "../images/world images/sacrifices.jpeg";
import cathedral from "../images/world images/cathedral.jpeg";
import farron from "../images/world images/farron.jpeg";
import catacombs from "../images/world images/catacombs.jpeg";
import smouldering from "../images/world images/smouldering.jpeg";
import boreal from "../images/world images/boreal.jpeg";
import dungeon from "../images/world images/dungeon.jpeg";
import profaned from "../images/world images/profaned.jpeg";
import anor from "../images/world images/anor.jpeg";
import castle from "../images/world images/castle.jpeg";
import consumed from "../images/world images/consumed.jpeg";
import archives from "../images/world images/archives.jpeg";
import kiln from "../images/world images/kiln.jpeg";

import painted from "../images/world images/painted.jpeg";
import dreg from "../images/world images/dreg.jpeg";
import ring from "../images/world images/ring.jpeg";

/* ========= Data ========= */
const mainLocations = [
  { name: "Firelink Shrine", src: firelink },
  { name: "Cemetery of Ash", src: cemetary },
  { name: "High Wall of Lothric", src: lothric },
  { name: "Undead Settlement", src: undead },
  { name: "Road of Sacrifices", src: sacrifices },
  { name: "Cathedral of the Deep", src: cathedral },
  { name: "Farron Keep", src: farron },
  { name: "Catacombs of Carthus", src: catacombs },
  { name: "Smouldering Lake", src: smouldering },
  { name: "Irithyll of the Boreal Valley", src: boreal },
  { name: "Irithyll Dungeon", src: dungeon },
  { name: "Profaned Capital", src: profaned },
  { name: "Anor Londo", src: anor },
  { name: "Lothric Castle", src: castle },
  { name: "Consumed King’s Garden", src: consumed },
  { name: "Grand Archives", src: archives },
  { name: "Kiln of the First Flame", src: kiln },
];

const dlcLocations = [
  { name: "Painted World of Ariandel", src: painted },
  { name: "The Dreg Heap",            src: dreg },
  { name: "The Ringed City",          src: ring },
];

/* ========= Component ========= */
const World = () => {
  return (
    <section className="page">
      <h2>World Locations</h2>

      <h2 className="boss-title">Main Story Locations</h2>
      <div className="container band-dark">
        <ImageGrid
          items={mainLocations.map(({ name, src }) => ({
            src,
            alt: name,
            label: name,
          }))}
          /* Use 4-up grid by default; change to grid-3 if you prefer */
          wrapperClass="grid grid-4 gap-lg world-grid"
          imgClass="art-img"
          /* Keep your existing markup for styling */
          renderItem={(item, i) => (
            <article key={`main-${i}`} className="place-card" data-place={item.label}>
              <img src={item.src} alt={item.alt} className="art-img" loading="lazy" />
              <button className="pill">{item.label}</button>
            </article>
          )}
        />
      </div>

      <h2 className="boss-title">DLC Locations</h2>
      <div className="container band-dark">
        <ImageGrid
          items={dlcLocations.map(({ name, src }) => ({
            src,
            alt: name,
            label: name,
          }))}
          wrapperClass="grid grid-4 gap-lg world-grid"
          imgClass="art-img"
          renderItem={(item, i) => (
            <article key={`dlc-${i}`} className="place-card" data-place={item.label}>
              <img src={item.src} alt={item.alt} className="art-img" loading="lazy" />
              <button className="pill">{item.label}</button>
            </article>
          )}
        />
      </div>
    </section>
  );
};

export default World;
