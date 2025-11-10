// src/pages/Bosses.jsx
import { useState } from "react";
import "./../css/Bosses.css";
import ImageGrid from "../components/Image Grid";
import Modal from "../components/Modal";

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
  const [selectedBoss, setSelectedBoss] = useState(null);

  // Build arrays of { src, alt, label } for each section.
  const mainRow1 = [
    { src: gundyr,  alt: "Iudex Gundyr",                    label: "Iudex Gundyr" },
    { src: vordt,   alt: "Vordt of the Boreal Valley",      label: "Vordt of the Boreal Valley" },
    { src: curse,   alt: "Curse-Rotted Greatwood",          label: "Curse-Rotted Greatwood (optional)" },
    { src: crystal, alt: "Crystal Sage",                    label: "Crystal Sage" },
  ];

  const mainRow2 = [
    { src: deacon,    alt: "Deacons of the Deep",           label: "Deacons of the Deep" },
    { src: abyss,     alt: "Abyss Watchers",                label: "Abyss Watchers" },
    { src: lord,      alt: "High Lord Wolnir",              label: "High Lord Wolnir" },
    { src: demonKing, alt: "Old Demon King",                label: "Old Demon King (optional)" },
  ];

  const mainRow3 = [
    { src: pontiff, alt: "Pontiff Sulyvahn",                label: "Pontiff Sulyvan" },
    { src: yhorm,   alt: "Yhorm the Giant",                 label: "Yhorm the Giant" },
    { src: aldrich, alt: "Aldrich, Devourer of Gods",       label: "Aldrich, Devourer of Gods" },
    { src: dancer,  alt: "Dancer of the Boreal Valley",     label: "Dancer of the Boreal Valley" },
  ];

  const mainRow4 = [
    { src: dragon,  alt: "Dragonslayer Armour",             label: "Dragonslayer Armour" },
    { src: oceiros, alt: "Oceiros, the Consumed King",      label: "Oceiros, the Consumed King (optional)" },
    { src: cgundyr, alt: "Champion Gundyr",                 label: "Champion Gundyr" },
    { src: twin,    alt: "Lothric and Lorian",              label: "Lothric & Lorian" },
  ];

  const mainRow5 = [
    { src: wyvern,   alt: "Ancient Wyvern",                 label: "Ancient Wyvern (optional)" },
    { src: nameless, alt: "Nameless King",                  label: "Nameless King (optional)" },
    { src: soul,     alt: "Soul of Cinder",                 label: "Soul of Cinder" },
  ];

  const dlcRow = [
    { src: grave,    alt: "Champion's Gravetender",         label: "Champion's Gravetender & Greatwolf" },
    { src: sister,   alt: "Sister Friede",                  label: "Sister Friede" },
    { src: prince,   alt: "Demon Prince",                   label: "Demon Prince" },
    { src: halflight,alt: "Halflight, Spear of the Church", label: "Halflight, Spear of the Church" },
    { src: midir,    alt: "Darkeater Midir",                label: "Darkeater Midir" },
    { src: gael,     alt: "Slave Knight Gael",              label: "Slave Knight Gael" },
  ];

  const handleItemClick = (item) => {
    setSelectedBoss(item);
  };

  const closeModal = () => setSelectedBoss(null);

  return (
    <>
      <h2 className="boss-title">Main Game Bosses:</h2>

      <div className="container band-dark">
        <ImageGrid
          items={mainRow1}
          wrapperClass="grid grid-4 boss-grid"
          imgClass="art-img"
          onItemClick={handleItemClick}
        />
      </div>

      <div className="container band-dark">
        <ImageGrid
          items={mainRow2}
          wrapperClass="grid grid-4 boss-grid"
          imgClass="art-img"
          onItemClick={handleItemClick}
        />
      </div>

      <div className="container band-dark">
        <ImageGrid
          items={mainRow3}
          wrapperClass="grid grid-4 boss-grid"
          imgClass="art-img"
          onItemClick={handleItemClick}
        />
      </div>

      <div className="container band-dark">
        <ImageGrid
          items={mainRow4}
          wrapperClass="grid grid-4 boss-grid"
          imgClass="art-img"
          onItemClick={handleItemClick}
        />
      </div>

      <div className="container band-dark">
        <ImageGrid
          items={mainRow5}
          wrapperClass="grid grid-4 boss-grid"
          imgClass="art-img"
          onItemClick={handleItemClick}
        />
      </div>

      <h2 className="boss-title">DLC Bosses:</h2>

      <div className="container band-dark">
        <ImageGrid
          items={dlcRow}
          wrapperClass="grid grid-4 boss-grid"
          imgClass="art-img"
          onItemClick={handleItemClick}
        />
      </div>

      {/* Reusable modal */}
      <Modal
        isOpen={!!selectedBoss}
        onClose={closeModal}
        title={selectedBoss?.label}
      >
        {selectedBoss && (
          <>
            <img src={selectedBoss.src} alt={selectedBoss.alt} />
            <p>{selectedBoss.alt}</p>
          </>
        )}
      </Modal>
    </>
  );
};

export default Bosses;
