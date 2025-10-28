import "./../css/Bosses.css";

// Main Game Bosses
import gundyr from "../images/boss images/gundyr.jpg";
import vordt from "../images/boss images/Vordt.jpg";
import curse from "../images/boss images/curse.jpg";
import crystal from "../images/boss images/crystal.jpg";
import deacon from "../images/boss images/deacon.jpg";
import abyss from "../images/boss images/abyss.jpg";
import lord from "../images/boss images/lord.jpg";
import demonKing from "../images/boss images/demon-king.jpg";
import pontiff from "../images/boss images/pontiff.jpg";
import yhorm from "../images/boss images/yhorm.jpg";
import aldrich from "../images/boss images/aldrich.jpg";
import dancer from "../images/boss images/dancer.jpg";
import dragon from "../images/boss images/dragon.jpg";
import oceiros from "../images/boss images/Oce.jpg";
import cgundyr from "../images/boss images/CGundyr.jpg";
import twin from "../images/boss images/twin.jpg";
import wyvern from "../images/boss images/wyvern.jpg";
import nameless from "../images/boss images/nameless.jpg";
import soul from "../images/boss images/soul.jpg";
// DLC Bosses
import grave from "../images/boss images/grave.jpg";
import sister from "../images/boss images/sister.jpg";
import prince from "../images/boss images/prince.jpg";
import halflight from "../images/boss images/halfight.jpg";
import midir from "../images/boss images/midir.jpg";
import gael from "../images/boss images/gael.jpg";

const Bosses = () => {
  return (
    <>
      <h2 className="boss-title">Main Game Bosses:</h2>

      <div className="container band-dark">
        <div className="grid grid-4 boss-grid">
          <article className="boss-card">
            <img src={gundyr} alt="Iudex Gundyr" />
            <button className="pill">Iudex Gundyr</button>
          </article>
          <article className="boss-card">
            <img src={vordt} alt="Vordt of the Boreal Valley" />
            <button className="pill">Vordt of the Boreal Valley</button>
          </article>
          <article className="boss-card">
            <img src={curse} alt="Curse-Rotted Greatwood" />
            <button className="pill">Curse-Rotted Greatwood (optional)</button>
          </article>
          <article className="boss-card">
            <img src={crystal} alt="Crystal Sage" />
            <button className="pill">Crystal Sage</button>
          </article>
        </div>
      </div>

      <div className="container band-dark">
        <div className="grid grid-4 boss-grid">
          <article className="boss-card">
            <img src={deacon} alt="Deacons of the Deep" />
            <button className="pill">Deacons of the Deep</button>
          </article>
          <article className="boss-card">
            <img src={abyss} alt="Abyss Watchers" />
            <button className="pill">Abyss Watchers</button>
          </article>
          <article className="boss-card">
            <img src={lord} alt="High Lord Wolnir" />
            <button className="pill">High Lord Wolnir</button>
          </article>
          <article className="boss-card">
            <img src={demonKing} alt="Old Demon King" />
            <button className="pill">Old Demon King (optional)</button>
          </article>
        </div>
      </div>

      <div className="container band-dark">
        <div className="grid grid-4 boss-grid">
          <article className="boss-card">
            <img src={pontiff} alt="Pontiff Sulyvan" />
            <button className="pill">Pontiff Sulyvan</button>
          </article>
          <article className="boss-card">
            <img src={yhorm} alt="Yhorm the Giant" />
            <button className="pill">Yhorm the Giant</button>
          </article>
          <article className="boss-card">
            <img src={aldrich} alt="Aldrich, Devourer of Gods" />
            <button className="pill">Aldrich, Devourer of Gods</button>
          </article>
          <article className="boss-card">
            <img src={dancer} alt="Dancer of the Boreal Valley" />
            <button className="pill">Dancer of the Boreal Valley</button>
          </article>
        </div>
      </div>

      <div className="container band-dark">
        <div className="grid grid-4 boss-grid">
          <article className="boss-card">
            <img src={dragon} alt="Dragonslayer Armour" />
            <button className="pill">Dragonslayer Armour</button>
          </article>
          <article className="boss-card">
            <img src={oceiros} alt="Oceiros, the Consumed King" />
            <button className="pill">Oceiros, the Consumed King (optional)</button>
          </article>
          <article className="boss-card">
            <img src={cgundyr} alt="Champion Gundyr" />
            <button className="pill">Champion Gundyr</button>
          </article>
          <article className="boss-card">
            <img src={twin} alt="Lothric and Lorian" />
            <button className="pill">Lothric, Younger Prince and Lorian, Elder Prince</button>
          </article>
        </div>
      </div>

      <div className="container band-dark">
        <div className="grid grid-4 boss-grid">
          <article className="boss-card">
            <img src={wyvern} alt="Ancient Wyvern" />
            <button className="pill">Ancient Wyvern (optional)</button>
          </article>
          <article className="boss-card">
            <img src={nameless} alt="Nameless King" />
            <button className="pill">Nameless King (optional)</button>
          </article>
          <article className="boss-card">
            <img src={soul} alt="Soul of Cinder" />
            <button className="pill">Soul of Cinder</button>
          </article>
        </div>
      </div>

      <h2 className="boss-title">DLC Bosses:</h2>

      <div className="container band-dark">
        <div className="grid grid-4 boss-grid">
          <article className="boss-card">
            <img src={grave} alt="Champion's Gravetender" />
            <button className="pill">Champion's Gravetender &amp; Gravetender Greatwolf</button>
          </article>
          <article className="boss-card">
            <img src={sister} alt="Sister Friede" />
            <button className="pill">Sister Friede</button>
          </article>
          <article className="boss-card">
            <img src={prince} alt="Demon Prince" />
            <button className="pill">Demon Prince</button>
          </article>
          <article className="boss-card">
            <img src={halflight} alt="Halflight" />
            <button className="pill">Halflight, Spear of the Church</button>
          </article>

          <article className="boss-card">
            <img src={midir} alt="Darkeater Midir" />
            <button className="pill">Darkeater Midir</button>
          </article>
          <article className="boss-card">
            <img src={gael} alt="Slave Knight Gael" />
            <button className="pill">Slave Knight Gael</button>
          </article>
        </div>
      </div>

    </>
  );
};

export default Bosses;
