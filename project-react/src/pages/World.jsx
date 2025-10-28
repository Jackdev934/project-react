import "../css/World.css";

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

/* ========= Component ========= */
const World = () => {
  return (
    <section className="page">
      <h2>World Locations</h2>

      <h2 className="boss-title">Main Story Locations</h2>
      <div className="grid grid-3 gap-lg world-grid">
        <article className="place-card" data-place="Firelink Shrine">
          <img src={firelink} alt="Firelink Shrine" />
          <button className="pill">Firelink Shrine</button>
        </article>

        <article className="place-card" data-place="Cemetery of Ash">
          <img src={cemetary} alt="Cemetery of Ash" />
          <button className="pill">Cemetery of Ash</button>
        </article>

        <article className="place-card" data-place="High Wall of Lothric">
          <img src={lothric} alt="High Wall of Lothric" />
          <button className="pill">High Wall of Lothric</button>
        </article>

        <article className="place-card" data-place="Undead Settlement">
          <img src={undead} alt="Undead Settlement" />
          <button className="pill">Undead Settlement</button>
        </article>

        <article className="place-card" data-place="Road of Sacrifices">
          <img src={sacrifices} alt="Road of Sacrifices" />
          <button className="pill">Road of Sacrifices</button>
        </article>

        <article className="place-card" data-place="Cathedral of the Deep">
          <img src={cathedral} alt="Cathedral of the Deep" />
          <button className="pill">Cathedral of the Deep</button>
        </article>

        <article className="place-card" data-place="Farron Keep">
          <img src={farron} alt="Farron Keep" />
          <button className="pill">Farron Keep</button>
        </article>

        <article className="place-card" data-place="Catacombs of Carthus">
          <img src={catacombs} alt="Catacombs of Carthus" />
          <button className="pill">Catacombs of Carthus</button>
        </article>

        <article className="place-card" data-place="Smouldering Lake">
          <img src={smouldering} alt="Smouldering Lake" />
          <button className="pill">Smouldering Lake</button>
        </article>

        <article className="place-card" data-place="Irithyll of the Boreal Valley">
          <img src={boreal} alt="Irithyll of the Boreal Valley" />
          <button className="pill">Irithyll of the Boreal Valley</button>
        </article>

        <article className="place-card" data-place="Irithyll Dungeon">
          <img src={dungeon} alt="Irithyll Dungeon" />
          <button className="pill">Irithyll Dungeon</button>
        </article>

        <article className="place-card" data-place="Profaned Capital">
          <img src={profaned} alt="Profaned Capital" />
          <button className="pill">Profaned Capital</button>
        </article>

        <article className="place-card" data-place="Anor Londo">
          <img src={anor} alt="Anor Londo" />
          <button className="pill">Anor Londo</button>
        </article>

        <article className="place-card" data-place="Lothric Castle">
          <img src={castle} alt="Lothric Castle" />
          <button className="pill">Lothric Castle</button>
        </article>

        <article className="place-card" data-place="Consumed King’s Garden">
          <img src={consumed} alt="Consumed King’s Garden" />
          <button className="pill">Consumed King’s Garden</button>
        </article>

        <article className="place-card" data-place="Grand Archives">
          <img src={archives} alt="Grand Archives" />
          <button className="pill">Grand Archives</button>
        </article>

        <article className="place-card" data-place="Kiln of the First Flame">
          <img src={kiln} alt="Kiln of the First Flame" />
          <button className="pill">Kiln of the First Flame</button>
        </article>
      </div>

      {/* DLC */}
      <h2 className="boss-title">DLC Locations</h2>
      <div className="grid grid-3 gap-lg world-grid">
        <article className="place-card" data-place="Painted World of Ariandel">
          <img src={painted} alt="Painted World of Ariandel" />
          <button className="pill">Painted World of Ariandel</button>
        </article>

        <article className="place-card" data-place="The Dreg Heap">
          <img src={dreg} alt="The Dreg Heap" />
          <button className="pill">The Dreg Heap</button>
        </article>

        <article className="place-card" data-place="The Ringed City">
          <img src={ring} alt="The Ringed City" />
          <button className="pill">The Ringed City</button>
        </article>
      </div>
    </section>
  );
};

export default World;
