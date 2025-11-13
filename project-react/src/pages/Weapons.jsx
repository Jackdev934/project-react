
import { useState } from "react";
import "../css/Weapons.css";
import Modal from "../components/Modal";


// Straight Swords
import longsword from "../images/weapons img/straight-swords/longswords/longsword.png";
import broadsword from "../images/weapons img/straight-swords/broadswords/broadsword.png";
import shortsword from "../images/weapons img/straight-swords/shortswords/Shortsword2.png";

// Greatswords
import claymore from "../images/weapons img/great-sword/standard/claymore.png";
import blackKnightGreatsword from "../images/weapons img/great-sword/unique/black_knight_greatsword.png";

// Ultra Greatswords
import ultra from "../images/weapons img/ultra-great/colossal/ultra_greatsword.png";
import fumeUltra from "../images/weapons img/ultra-great/paired/fume_ultra_greatsword.png";

// Curved Swords
import scimitar from "../images/weapons img/curved-sword/light/Scimitar2.png";
import carthus from "../images/weapons img/curved-sword/heavy/carthus_shotel.png";
import sellsword from "../images/weapons img/curved-sword/paired/sellsword_twinblades.png";

// Curved Greatswords
import exile from "../images/weapons img/curved-great/heavy/exile_greatsword.png";
import oldWolf from "../images/weapons img/curved-great/unique/old_wolf_curved_sword.png";

// Katanas
import uchigatana from "../images/weapons img/katanas/standard/uchigatana.png";
import blackBlade from "../images/weapons img/katanas/unique/black_blade.png";

// Daggers
import dagger from "../images/weapons img/daggers/standard/Dagger2.png";
import brigand from "../images/weapons img/daggers/paired/brigand_twindaggers.png";
import mailBreaker from "../images/weapons img/daggers/unique/mail_breaker.png";

// Thrusting Swords
import rapier from "../images/weapons img/thrusting/standard/rapier.png";
import ricards from "../images/weapons img/thrusting/special/ricards_rapier.png";

// Axes
import handAxe from "../images/weapons img/axes/small/hand_axe.png";
import battleAxe from "../images/weapons img/axes/large/battle_axe.png";
import dragonAxe from "../images/weapons img/axes/unique/dragon-king-greataxe.png";

// Greataxes
import greataxe from "../images/weapons img/greataxes/standard/Greataxe.png";
import blackKnightGreataxe from "../images/weapons img/greataxes/unique/black_knight_greataxe.png";

// Hammers
import club from "../images/weapons img/hammers/standard/Club2.png";
import warpick from "../images/weapons img/hammers/unique/warpick.png";

// Greathammers
import greatClub from "../images/weapons img/great-hammers/colossal/great_club.png";
import dragonTooth from "../images/weapons img/great-hammers/unique/dragon_tooth.png";

// Spears & Pikes
import spear from "../images/weapons img/spears/spears/spear.png";
import pike from "../images/weapons img/spears/pikes/Pike.png";
import dragonslayer from "../images/weapons img/spears/paired/dragonslayer_swordspear.png";

// Halberds
import halberd from "../images/weapons img/halberds/standard/Halberd2.png";
import glaive from "../images/weapons img/halberds/special/black_knight_glaive.png";

// Reapers
import greatScythe from "../images/weapons img/reapers/scythes/great_scythe.png";
import corvian from "../images/weapons img/reapers/unique/Great_Corvian_Scythe.webp";

// Whips
import whip from "../images/weapons img/whips/standard/whip.png";
import spottedWhip from "../images/weapons img/whips/unique/spotted_whip.png";

// Fists & Claws
import caestus from "../images/weapons img/fists-claws/fist/caestus.png";
import claw from "../images/weapons img/fists-claws/claws/claw.png";

// Bows
import shortBow from "../images/weapons img/bows/short/Short_Bow_29.webp";
import longbow from "../images/weapons img/bows/long/Longbow2.png";
import dragonriderBow from "../images/weapons img/bows/great/dragonrider_bow.png";

// Crossbows
import lightCrossbow from "../images/weapons img/crossbows/light/light_crossbow.png";
import avelyn from "../images/weapons img/crossbows/unique/avelyn.png";

// Staves
import sorcererStaff from "../images/weapons img/staves/basic/sorcerers_staff.png";
import medicantsStaff from "../images/weapons img/staves/unique/medicants_staff.png";

// Chimes / Talismans
import clericChime from "../images/weapons img/chimes/basic/clerics_sacred_chime.png";
import saintsTalisman from "../images/weapons img/chimes/unique/saints_talisman.png";

// Pyromancies
import pyromancerFlame from "../images/weapons img/pyromancy/standard/pyromancer_parting_flame.png";
import demonsScar from "../images/weapons img/pyromancy/unique/demon's_scar.png";

// Shields
import smallShield from "../images/weapons img/shields/small/small_leather_shield.png";
import kiteShield from "../images/weapons img/shields/medium/kite_shield.png";
import greatshield from "../images/weapons img/shields/great/greatshield_of_glory.png";

const weaponSections = [
  {
    title: "Straight Swords",
    subclasses: [
      {
        id: "longsword",
        label: "Longswords",
        icon: longsword,
        weapons: [
          {
            name: "Longsword",
            img: longsword,
            type: "Standard Straight Sword",
            scaling: "STR / DEX",
            requirements: "STR 10, DEX 10",
            description:
              "A well-balanced straight sword used widely by many knights. Reliable in almost any situation and a staple for many runs."
          }
        ]
      },
      {
        id: "broadsword",
        label: "Broadswords",
        icon: broadsword,
        weapons: [
          {
            name: "Broadsword",
            img: broadsword,
            type: "Slash-focused Straight Sword",
            scaling: "STR / DEX",
            requirements: "STR 11, DEX 10",
            description:
              "A heavier straight sword that emphasizes slashing attacks. It trades a bit of reach for higher raw damage."
          }
        ]
      },
      {
        id: "shortsword",
        label: "Shortswords",
        icon: shortsword,
        weapons: [
          {
            name: "Shortsword",
            img: shortsword,
            type: "Light Straight Sword",
            scaling: "STR / DEX",
            requirements: "STR 8, DEX 11",
            description:
              "A light, quick sword with shorter reach. Ideal for early-game dexterity builds and fast combos."
          }
        ]
      }
    ]
  },
  {
    title: "Greatswords",
    subclasses: [
      {
        id: "claymore",
        label: "Standard",
        icon: claymore,
        weapons: [
          {
            name: "Claymore",
            img: claymore,
            type: "Greatsword",
            scaling: "STR / DEX",
            requirements: "STR 16, DEX 13",
            description:
              "A legendary greatsword with sweeping and thrusting attacks. One of the most versatile weapons in the series."
          }
        ]
      },
      {
        id: "bk-gs",
        label: "Unique",
        icon: blackKnightGreatsword,
        weapons: [
          {
            name: "Black Knight Greatsword",
            img: blackKnightGreatsword,
            type: "Ultra Greatsword",
            scaling: "STR",
            requirements: "STR 30, DEX 18",
            description:
              "A massive greatsword once wielded by the Black Knights who served Gwyn. Deals bonus damage to demons."
          }
        ]
      }
    ]
  },
  {
    title: "Ultra Greatswords",
    subclasses: [
      {
        id: "ultra",
        label: "Colossal",
        icon: ultra,
        weapons: [
          {
            name: "Greatsword",
            img: ultra,
            type: "Ultra Greatsword",
            scaling: "STR",
            requirements: "STR 28, DEX 10",
            description:
              "An enormous slab of iron more akin to a hunk of steel than a sword. Slow, but devastating when it connects."
          }
        ]
      },
      {
        id: "fume-ultra",
        label: "Paired",
        icon: fumeUltra,
        weapons: [
          {
            name: "Fume Ultra Greatsword",
            img: fumeUltra,
            type: "Ultra Greatsword",
            scaling: "STR",
            requirements: "STR 50, DEX 10",
            description:
              "A cursed ultra greatsword with incredible weight and power. Beloved by strength builds that enjoy trading blows."
          }
        ]
      }
    ]
  },
  {
    title: "Curved Swords",
    subclasses: [
      {
        id: "scimitar",
        label: "Light",
        icon: scimitar,
        weapons: [
          {
            name: "Scimitar",
            img: scimitar,
            type: "Curved Sword",
            scaling: "DEX",
            requirements: "STR 7, DEX 13",
            description:
              "A light curved sword famous for its rapid slashes and flowing moveset."
          }
        ]
      },
      {
        id: "carthus",
        label: "Heavy",
        icon: carthus,
        weapons: [
          {
            name: "Carthus Shotel",
            img: carthus,
            type: "Curved Sword",
            scaling: "DEX",
            requirements: "STR 10, DEX 19",
            description:
              "A wickedly curved blade capable of striking around shields. Belongs to the swordmasters of Carthus."
          }
        ]
      },
      {
        id: "sellsword",
        label: "Paired",
        icon: sellsword,
        weapons: [
          {
            name: "Sellsword Twinblades",
            img: sellsword,
            type: "Paired Curved Swords",
            scaling: "DEX",
            requirements: "STR 10, DEX 16",
            description:
              "Dual curved swords famous for their relentless combos. A favorite for agile, aggressive builds."
          }
        ]
      }
    ]
  },

  {
    title: "Curved Greatswords",
    subclasses: [
      {
        id: "exile",
        label: "Heavy",
        icon: exile,
        weapons: [
          {
            name: "Exile Greatsword",
            img: exile,
            type: "Curved Greatsword",
            scaling: "STR / DEX",
            requirements: "STR 24, DEX 16",
            description:
              "A heavy curved greatsword favored by executioners. Excellent for bleed and high damage output."
          }
        ]
      },
      {
        id: "old-wolf",
        label: "Unique",
        icon: oldWolf,
        weapons: [
          {
            name: "Old Wolf Curved Sword",
            img: oldWolf,
            type: "Curved Greatsword",
            scaling: "DEX / FTH",
            requirements: "STR 19, DEX 25",
            description:
              "A relic tied to the Watchdogs of Farron. Attacking consecutively restores HP and builds a battle rhythm."
          }
        ]
      }
    ]
  },
  {
    title: "Katanas",
    subclasses: [
      {
        id: "uchi",
        label: "Standard",
        icon: uchigatana,
        weapons: [
          {
            name: "Uchigatana",
            img: uchigatana,
            type: "Katana",
            scaling: "DEX",
            requirements: "STR 11, DEX 16",
            description:
              "A slender katana that combines sharp cutting power with fast attacks and a deadly bleed effect."
          }
        ]
      },
      {
        id: "black-blade",
        label: "Unique",
        icon: blackBlade,
        weapons: [
          {
            name: "Black Blade",
            img: blackBlade,
            type: "Katana",
            scaling: "STR / DEX",
            requirements: "STR 18, DEX 18",
            description:
              "A shorter but heavier katana once wielded by a swordsman of legend. Hits like a truck for its size."
          }
        ]
      }
    ]
  },
  {
    title: "Pyromancies",
    subclasses: [
      {
        id: "pyro-flame",
        label: "Standard",
        icon: pyromancerFlame,
        weapons: [
          {
            name: "Pyromancer’s Parting Flame",
            img: pyromancerFlame,
            type: "Pyromancy Flame",
            scaling: "INT / FTH",
            requirements: "INT 12, FTH 12",
            description:
              "A pyromancy flame that scatters embers upon death. Balances power and aesthetics."
          }
        ]
      },
      {
        id: "demons-scar",
        label: "Unique",
        icon: demonsScar,
        weapons: [
          {
            name: "Demon’s Scar",
            img: demonsScar,
            type: "Pyromancy Flame / Curved Sword",
            scaling: "INT / FTH / DEX",
            requirements: "STR 16, DEX 17, INT 16, FTH 17",
            description:
              "A weapon that acts as both sword and flame catalyst. Born from a demon’s soul."
          }
        ]
      }
    ]
  },
  {
    title: "Shields",
    subclasses: [
      {
        id: "small-shield",
        label: "Small",
        icon: smallShield,
        weapons: [
          {
            name: "Small Leather Shield",
            img: smallShield,
            type: "Small Shield",
            scaling: "-",
            requirements: "STR 8, DEX 8",
            description:
              "A lightweight shield offering quick parries and minimal weight."
          }
        ]
      },
      {
        id: "kite-shield",
        label: "Medium",
        icon: kiteShield,
        weapons: [
          {
            name: "Kite Shield",
            img: kiteShield,
            type: "Medium Shield",
            scaling: "-",
            requirements: "STR 10",
            description:
              "A balanced shield used by many knights. Decent stability and all-round protection."
          }
        ]
      },
      {
        id: "greatshield",
        label: "Great",
        icon: greatshield,
        weapons: [
          {
            name: "Greatshield of Glory",
            img: greatshield,
            type: "Greatshield",
            scaling: "STR",
            requirements: "STR 32",
            description:
              "A titanic shield with peerless defense but extreme weight and stamina cost."
          }
        ]
      }
    ]
  }
];


/* ========= Small presentational components ========= */

const SubclassCard = ({ subclass, onClick }) => (
  <article className="subclass-card" onClick={onClick}>
    <img src={subclass.icon} alt={subclass.label} />
    <button className="pill">{subclass.label}</button>
  </article>
);

const WeaponSection = ({ title, subclasses, onSubclassClick }) => (
  <div className="weapon-section">
    <h2 className="weapon-section-title">{title}</h2>
    <div className="weapon-scroll-row">
      {subclasses.map((sub) => (
        <SubclassCard
          key={sub.id}
          subclass={sub}
          onClick={() => onSubclassClick(sub)}
        />
      ))}
    </div>
  </div>
);

/* ========= Main Component ========= */

const Weapons = () => {
  const [selectedSubclass, setSelectedSubclass] = useState(null);
  const [selectedWeaponIndex, setSelectedWeaponIndex] = useState(0);

  const openSubclassModal = (subclass) => {
    setSelectedSubclass(subclass);
    setSelectedWeaponIndex(0);
  };

  const closeModal = () => {
    setSelectedSubclass(null);
    setSelectedWeaponIndex(0);
  };

  const currentWeapon =
    selectedSubclass?.weapons?.[selectedWeaponIndex] || null;

  const goPrevWeapon = () => {
    if (!selectedSubclass) return;
    const len = selectedSubclass.weapons.length;
    setSelectedWeaponIndex((prev) => (prev - 1 + len) % len);
  };

  const goNextWeapon = () => {
    if (!selectedSubclass) return;
    const len = selectedSubclass.weapons.length;
    setSelectedWeaponIndex((prev) => (prev + 1) % len);
  };

  const selectWeaponByIndex = (index) => {
    setSelectedWeaponIndex(index);
  };

  return (
    <section className="page">
      <h2>Weapons &amp; Tools</h2>
      <h2 className="weapon-head-title">Dark Souls III Weapon Classes</h2>

      <div className="weapon-container">
        <div className="weapon-sections">
          {weaponSections.map((section) => (
            <WeaponSection
              key={section.title}
              title={section.title}
              subclasses={section.subclasses}
              onSubclassClick={openSubclassModal}
            />
          ))}
        </div>
      </div>

      {/* Modal for multi-weapon view inside a subclass */}
      <Modal
        isOpen={!!selectedSubclass}
        onClose={closeModal}
        title={selectedSubclass?.label}
      >
        {selectedSubclass && currentWeapon && (
          <div>
            {/* Icon of the selected weapon */}
            <img
              className="weapon-modal-icon"
              src={currentWeapon.img}
              alt={currentWeapon.name}
            />

            {/* Pills to jump between weapons in this subclass */}
            <div className="weapon-modal-selector">
              {selectedSubclass.weapons.map((w, index) => (
                <button
                  key={w.name}
                  className={
                    index === selectedWeaponIndex
                      ? "weapon-pill weapon-pill-active"
                      : "weapon-pill"
                  }
                  onClick={() => selectWeaponByIndex(index)}
                >
                  {w.name}
                </button>
              ))}
            </div>

            {/* Prev / Next controls */}
            {selectedSubclass.weapons.length > 1 && (
              <div className="weapon-modal-nav">
                <button onClick={goPrevWeapon}>⟵ Previous</button>
                <span>
                  {selectedWeaponIndex + 1} /{" "}
                  {selectedSubclass.weapons.length}
                </span>
                <button onClick={goNextWeapon}>Next ⟶</button>
              </div>
            )}

            {/* Weapon details */}
            <ul className="weapon-modal-details">
              <li>
                <strong>Name:</strong> {currentWeapon.name}
              </li>
              {currentWeapon.type && (
                <li>
                  <strong>Type:</strong> {currentWeapon.type}
                </li>
              )}
              {currentWeapon.scaling && (
                <li>
                  <strong>Scaling:</strong> {currentWeapon.scaling}
                </li>
              )}
              {currentWeapon.requirements && (
                <li>
                  <strong>Requirements:</strong>{" "}
                  {currentWeapon.requirements}
                </li>
              )}
            </ul>

            {currentWeapon.description && (
              <p className="weapon-modal-notes">
                {currentWeapon.description}
              </p>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Weapons;
