import { Link } from "react-router-dom";
import "../css/Home.css";

/* ========= Image Imports ========= */
import characters from "../images/home img/characters.jpeg";
import bosses from "../images/home img/boss.jpeg";
import weapons from "../images/home img/weapons.jpeg";
import world from "../images/home img/world.jpeg";
import lore from "../images/home img/lore.jpeg";
import guide from "../images/home img/guide.jpeg";
import community from "../images/home img/community.jpeg";
import about from "../images/home img/about.jpeg";
import fan1 from "../images/home img/fan1.jpeg";
import fan2 from "../images/home img/fan2.jpeg";
import fan3 from "../images/home img/fan3.jpeg";
import fan4 from "../images/home img/fan4.jpeg";
import fan5 from "../images/home img/fan5.jpeg";
import fan6 from "../images/home img/fan6.jpeg";
import fan7 from "../images/home img/fan7.jpeg";
import map from "../images/home img/map-2.jpg";

const Home = () => {
  return (
    <section className="page">
      <h2>Welcome to Astora’s Archive</h2>
      <p className="lead">
        Explore bosses, characters, weapons, locations, lore, and guides from Dark Souls III.
      </p>

      <div className="page-wrap">
        {/* Left Column */}
        <section className="left-col">
          <div className="panel band-brown">
            <h2 className="panel-title">Info Categories</h2>

            <div className="row-tiles">
              <article className="tile">
                <Link to="/characters"><img src={characters} alt="Characters" /></Link>
                <h3><Link to="/characters">Characters</Link></h3>
                <p>Dive into detailed profiles of key NPCs, allies, and adversaries.</p>
              </article>

              <article className="tile">
                <Link to="/bosses"><img src={bosses} alt="Bosses" /></Link>
                <h3><Link to="/bosses">Bosses</Link></h3>
                <p>Explore intense, lore-rich boss encounters.</p>
              </article>

              <article className="tile">
                <Link to="/weapons"><img src={weapons} alt="Weapons &amp; Tools" /></Link>
                <h3><Link to="/weapons">Weapons &amp; Tools</Link></h3>
                <p>Catalog of swords, bows, catalysts, and utility items.</p>
              </article>
            </div>

            <div className="row-tiles">
              <article className="tile">
                <Link to="/world"><img src={world} alt="World Locations" /></Link>
                <h3><Link to="/world">World Locations</Link></h3>
                <p>Navigate the haunting, interconnected realms of Dark Souls.</p>
              </article>

              <article className="tile">
                <Link to="/lore"><img src={lore} alt="Lore &amp; Story" /></Link>
                <h3><Link to="/lore">Lore &amp; Story</Link></h3>
                <p>Unravel deep narrative threads through items and events.</p>
              </article>

              <article className="tile">
                <Link to="/guides"><img src={guide} alt="Guides" /></Link>
                <h3><Link to="/guides">Guides</Link></h3>
                <p>Walkthroughs, build tips, covenant help and more.</p>
              </article>
            </div>

            <div className="row-tiles">
              <article className="tile">
                <Link to="/community"><img src={community} alt="Community" /></Link>
                <h3><Link to="/community">Community</Link></h3>
                <p>Hub for fan creations, theories, and modding.</p>
              </article>

              <article className="tile">
                <Link to="/about"><img src={about} alt="About Us" /></Link>
                <h3><Link to="/about">About Us</Link></h3>
                <p>Meet the passionate team behind Astora&apos;s Archive.</p>
              </article>
            </div>

            {/* Community Artwork */}
            <h2 className="panel-title">Community Artwork</h2>
            <div className="scroll-gallery">
              <div className="scroll-track">
                {[fan1, fan2, fan3, fan4, fan5, fan6, fan7].map((src, i) => (
                  <img key={i} src={src} alt={`Fan Art ${i + 1}`} />
                ))}
              </div>
            </div>

            {/* World Map Section */}
            <div className="world-map-section">
              <h2 className="panel-title" style={{ marginTop: 24 }}>World Map</h2>
              <img src={map} alt="Dark Souls World Map" className="world-map" />
            </div>
          </div>
        </section>

        {/* Right Column */}
        <aside className="right-col panel band-dark">
          <div className="info-block">
            <h3>General Information:</h3>
            <p>
              <strong>Release Date:</strong><br />
              March 24, 2016 (Japan)<br />
              April 12, 2016 (Worldwide for PC, PS4, Xbox One)<br /><br />
              <strong>Downloadable Content (DLC):</strong><br />
              Ashes of Ariandel (Released: October 24, 2016)<br />
              The Ringed City (Released: March 27–28, 2017)<br />
              Season Pass includes both expansions<br /><br />
              <strong>Platforms:</strong> PlayStation 4, Xbox One, Windows PC<br /><br />
              <strong>Notable Awards:</strong><br />
              Winner: Best RPG (The Game Awards 2016)<br />
              Nominated: Game of the Year (various outlets)
            </p>

            <p><strong>System Requirements:</strong></p>
            <ul>
              <li><strong>CPU:</strong> Intel Core i3-2100 / AMD® FX-6300</li>
              <li><strong>RAM:</strong> 4 GB</li>
              <li><strong>OS:</strong> Windows 7 SP1 64bit or later</li>
              <li><strong>Video Card:</strong> GTX 750 Ti / Radeon HD 7950</li>
              <li><strong>DirectX:</strong> 11</li>
              <li><strong>Storage:</strong> 25 GB</li>
              <li><strong>Sound Card:</strong> DirectX 11 compatible</li>
            </ul>

            <p><strong>Recommended Requirements:</strong></p>
            <ul>
              <li><strong>CPU:</strong> Intel Core i7-3770 / AMD® FX-8350</li>
              <li><strong>RAM:</strong> 8 GB</li>
              <li><strong>Video Card:</strong> GTX 970 / Radeon R9 series</li>
              <li><strong>DirectX:</strong> 11</li>
              <li><strong>Storage:</strong> 25 GB</li>
              <li><strong>Sound Card:</strong> DirectX 11 compatible</li>
            </ul>
          </div>

          <div className="info-rows">
            <button>Publisher: BANDAI NAMCO Entertainment America Inc.</button>
            <button>Developers: FromSoftware Inc.</button>
            <button>Player Count: Single-player</button>
            <button>Genre: Action RPG</button>
            <button>Platforms: PlayStation, Xbox, PC, Switch</button>
            <button>Languages: EN, FR, DE, JP, ZH, PT-BR, RU, KO</button>
          </div>

          <div className="other-games">
            <div className="thumb">
              <img src={guide} alt="Other Game Art" />
            </div>
            <h4>Other Games</h4>
            <ul>
              <li><a href="https://backloggd.com/games/demon-s-souls/" target="_blank" rel="noreferrer">Demon&apos;s Souls (2009)</a></li>
              <li><a href="https://backloggd.com/games/dark-souls/" target="_blank" rel="noreferrer">Dark Souls I (2011)</a></li>
              <li><a href="https://backloggd.com/games/dark-souls-ii/" target="_blank" rel="noreferrer">Dark Souls II (2014)</a></li>
              <li><a href="https://backloggd.com/games/bloodborne/" target="_blank" rel="noreferrer">Bloodborne (2015)</a></li>
              <li><a href="https://backloggd.com/games/sekiro-shadows-die-twice/" target="_blank" rel="noreferrer">Sekiro (2019)</a></li>
              <li><a href="https://backloggd.com/games/elden-ring/" target="_blank" rel="noreferrer">Elden Ring (2022)</a></li>
              <li><a href="https://backloggd.com/games/elden-ring-nightreign/" target="_blank" rel="noreferrer">Elden Ring Nightreign (2025)</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Home;
