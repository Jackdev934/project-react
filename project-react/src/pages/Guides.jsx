import "../css/Guides.css";

/* ========= Image Imports ========= */
import guide1 from "../images/guide img/guide1.jpeg";
import guide2 from "../images/guide img/guide2.jpeg";
import guide3 from "../images/guide img/guide3.jpg";

import quest1 from "../images/guide img/quest1.jpeg";
import quest2 from "../images/guide img/quest2.jpeg";
import quest3 from "../images/guide img/quest3.jpeg";

import boss1 from "../images/guide img/boss1.jpeg";
import boss2 from "../images/guide img/boss2.jpeg";
import boss3 from "../images/guide img/boss3.jpeg";

import find1 from "../images/guide img/find1.jpeg";
import find2 from "../images/guide img/find2.jpeg";
import find3 from "../images/guide img/find3.jpeg";

const Guides = () => {
  return (
    <section className="page">
      <h2>Guides &amp; Walkthrough</h2>

      <main>
        <div className="container">
          {/* Band 1 */}
          <div className="band-brown guide-band">
            <h2>Main Story Full Guides</h2>
            <div className="grid grid-3">
              <figure className="guide-card">
                <img src={guide1} alt="Dark Souls 3 - Full Game Walkthrough" />
                <figcaption>Dark Souls 3 - Full Game Walkthrough</figcaption>
              </figure>
              <figure className="guide-card">
                <img src={guide2} alt="Cemetery of Ash Guide" />
                <figcaption>Cemetery of Ash Guide 100%</figcaption>
              </figure>
              <figure className="guide-card">
                <img src={guide3} alt="Dark Souls 3 Walkthrough (No Commentary)" />
                <figcaption>Dark Souls 3 Walkthrough (No Commentary)</figcaption>
              </figure>
            </div>
          </div>

          <div className="divider-line"></div>

          {/* Band 2 */}
          <div className="band-brown guide-band">
            <h2>Questline Walkthrough</h2>
            <div className="grid grid-3">
              <figure className="guide-card">
                <img src={quest1} alt="Greirat's Questline" />
                <figcaption>Greirat&apos;s Questline</figcaption>
              </figure>
              <figure className="guide-card">
                <img src={quest2} alt="Siegward Questline" />
                <figcaption>Siegward Questline</figcaption>
              </figure>
              <figure className="guide-card">
                <img src={quest3} alt="Unbreakable Patches Guide" />
                <figcaption>Unbreakable Patches Guide</figcaption>
              </figure>
            </div>
          </div>

          <div className="divider-line"></div>

          {/* Band 3 */}
          <div className="band-brown guide-band">
            <h2>Boss Guide Tutorial</h2>
            <div className="grid grid-3">
              <figure className="guide-card">
                <img src={boss1} alt="Soul of Cinder Guide" />
                <figcaption>Soul of Cinder Guide</figcaption>
              </figure>
              <figure className="guide-card">
                <img src={boss2} alt="Slave Knight Gael Guide" />
                <figcaption>Slave Knight Gael Guide</figcaption>
              </figure>
              <figure className="guide-card">
                <img src={boss3} alt="Abyss Watchers Guide" />
                <figcaption>Abyss Watchers Guide</figcaption>
              </figure>
            </div>
          </div>

          <div className="divider-line"></div>

          {/* Band 4 */}
          <div className="band-brown guide-band">
            <h2>Item Discovery Walkthrough</h2>
            <div className="grid grid-3">
              <figure className="guide-card">
                <img src={find1} alt="How to find Chameleon Spell" />
                <figcaption>How to find Chameleon Spell</figcaption>
              </figure>
              <figure className="guide-card">
                <img src={find2} alt="Where to Find Fume Ultra Greatsword" />
                <figcaption>Where to Find Fume Ultra Greatsword</figcaption>
              </figure>
              <figure className="guide-card">
                <img src={find3} alt="How to get Boss Weapons" />
                <figcaption>How to get Boss Weapons</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Guides;
