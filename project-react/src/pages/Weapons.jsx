import "../css/Weapons.css";

/* ========= Image Imports ========= */
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

// Chimes
import clericChime from "../images/weapons img/chimes/basic/clerics_sacred_chime.png";
import saintsTalisman from "../images/weapons img/chimes/unique/saints_talisman.png";

// Pyromancies
import pyromancerFlame from "../images/weapons img/pyromancy/standard/pyromancer_parting_flame.png";
import demonsScar from "../images/weapons img/pyromancy/unique/demon's_scar.png";

// Shields
import smallShield from "../images/weapons img/shields/small/small_leather_shield.png";
import kiteShield from "../images/weapons img/shields/medium/kite_shield.png";
import greatshield from "../images/weapons img/shields/great/greatshield_of_glory.png";

/* ========= Reusable Components ========= */
const SubclassCard = ({ src, label }) => (
  <article className="subclass-card">
    <img src={src} alt={label} />
    <button className="pill">{label}</button>
  </article>
);

const WeaponSection = ({ title, items }) => (
  <div className="weapon-section">
    <h2>{title}</h2>
    <div className="scroll-gallery">
      {items.map((it, i) => (
        <SubclassCard key={i} src={it.src} label={it.label} />
      ))}
    </div>
  </div>
);

/* ========= Main Component ========= */
const Weapons = () => {
  const sections = [
    {
      title: "Straight Swords",
      items: [
        { label: "Longswords", src: longsword },
        { label: "Broadswords", src: broadsword },
        { label: "Shortswords", src: shortsword },
      ],
    },
    {
      title: "Greatswords",
      items: [
        { label: "Standard", src: claymore },
        { label: "Unique", src: blackKnightGreatsword },
      ],
    },
    {
      title: "Ultra Greatswords",
      items: [
        { label: "Colossal", src: ultra },
        { label: "Paired", src: fumeUltra },
      ],
    },
    {
      title: "Curved Swords",
      items: [
        { label: "Light", src: scimitar },
        { label: "Heavy", src: carthus },
        { label: "Paired", src: sellsword },
      ],
    },
    {
      title: "Curved Greatswords",
      items: [
        { label: "Heavy", src: exile },
        { label: "Unique", src: oldWolf },
      ],
    },
    {
      title: "Katanas",
      items: [
        { label: "Standard", src: uchigatana },
        { label: "Unique", src: blackBlade },
      ],
    },
    {
      title: "Daggers",
      items: [
        { label: "Standard", src: dagger },
        { label: "Paired", src: brigand },
        { label: "Unique", src: mailBreaker },
      ],
    },
    {
      title: "Thrusting Swords",
      items: [
        { label: "Standard", src: rapier },
        { label: "Special", src: ricards },
      ],
    },
    {
      title: "Axes",
      items: [
        { label: "Small", src: handAxe },
        { label: "Large", src: battleAxe },
        { label: "Unique", src: dragonAxe },
      ],
    },
    {
      title: "Greataxes",
      items: [
        { label: "Standard", src: greataxe },
        { label: "Unique", src: blackKnightGreataxe },
      ],
    },
    {
      title: "Hammers",
      items: [
        { label: "Standard", src: club },
        { label: "Unique", src: warpick },
      ],
    },
    {
      title: "Greathammers",
      items: [
        { label: "Colossal", src: greatClub },
        { label: "Unique", src: dragonTooth },
      ],
    },
    {
      title: "Spear & Pikes",
      items: [
        { label: "Spears", src: spear },
        { label: "Pikes", src: pike },
        { label: "Paired", src: dragonslayer },
      ],
    },
    {
      title: "Halberds",
      items: [
        { label: "Standard", src: halberd },
        { label: "Special", src: glaive },
      ],
    },
    {
      title: "Reapers",
      items: [
        { label: "Scythes", src: greatScythe },
        { label: "Unique", src: corvian },
      ],
    },
    {
      title: "Whips",
      items: [
        { label: "Standard", src: whip },
        { label: "Unique", src: spottedWhip },
      ],
    },
    {
      title: "Fists and Claws",
      items: [
        { label: "Fists", src: caestus },
        { label: "Claws", src: claw },
      ],
    },
    {
      title: "Bows",
      items: [
        { label: "Short", src: shortBow },
        { label: "Long", src: longbow },
        { label: "Great", src: dragonriderBow },
      ],
    },
    {
      title: "Crossbows",
      items: [
        { label: "Light", src: lightCrossbow },
        { label: "Unique", src: avelyn },
      ],
    },
    {
      title: "Staves",
      items: [
        { label: "Basic", src: sorcererStaff },
        { label: "Unique", src: medicantsStaff },
      ],
    },
    {
      title: "Chimes",
      items: [
        { label: "Basic", src: clericChime },
        { label: "Unique", src: saintsTalisman },
      ],
    },
    {
      title: "Pyromancies",
      items: [
        { label: "Standard", src: pyromancerFlame },
        { label: "Unique", src: demonsScar },
      ],
    },
    {
      title: "Shields",
      items: [
        { label: "Small", src: smallShield },
        { label: "Medium", src: kiteShield },
        { label: "Great", src: greatshield },
      ],
    },
  ];

  return (
    <section className="page">
      <h2>Weapons &amp; Tools</h2>
      <h2 className="weapon-head-title">Dark Souls III Weapon Classes</h2>

      <div className="weapon-container">
        <div className="weapon-sections">
          {sections.map((s, i) => (
            <WeaponSection key={i} title={s.title} items={s.items} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Weapons;
