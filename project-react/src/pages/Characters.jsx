import "../css/Characters.css";
import andre from "../images/character images/andre.jpeg";
import firekeeper from "../images/character images/fire.jpeg";
import leonhard from "../images/character images/ringfinger.jpeg";
import ludleth from "../images/character images/ludleth.jpeg";
import pickle from "../images/character images/pickle.jpeg";
import shrine from "../images/character images/shrine.jpeg";
import sirris from "../images/character images/sirris.jpeg";
import yuria from "../images/character images/yuria.jpeg";
import greirat from "../images/character images/greirat.jpeg";
import emma from "../images/character images/emma.jpeg";
import lion from "../images/character images/lion.jpeg";
import yoel from "../images/character images/yoel.jpeg";
import cornyx from "../images/character images/cornyx.jpeg";
import siegward from "../images/character images/siegward.jpeg";
import irina from "../images/character images/irina.jpeg";
import eygon from "../images/character images/eygon.jpeg";
import velka from "../images/character images/velka.jpeg";
import hodrick from "../images/character images/holy.jpeg";
import giant from "../images/character images/giant.jpeg";
import orbeck from "../images/character images/orbeck.jpeg";
import anri from "../images/character images/anri.jpeg";
import horace from "../images/character images/horace.jpeg";
import rosaria from "../images/character images/rosaria.jpeg";
import patches from "../images/character images/patches.jpeg";
import gael from "../images/character images/gael.jpeg";
import kirk from "../images/character images/kirk.jpeg";
import hawkwood from "../images/character images/hawkwood.jpeg";
import wolf from "../images/character images/wolf.jpeg";
import yellowfinger from "../images/character images/yellowfinger.jpeg";
import slayer from "../images/character images/slayer.jpeg";
import cuculus from "../images/character images/cuculus.jpeg";
import alva from "../images/character images/alva.jpeg";
import archdeacon from "../images/character images/archdeacon.jpeg";
import creighton from "../images/character images/creighton.jpeg";
import londor from "../images/character images/londor.jpeg";
import karla from "../images/character images/karla.jpeg";
import company from "../images/character images/company.jpeg";
import gotthard from "../images/character images/gotthard.jpeg";
import kamui from "../images/character images/kamui.jpeg";
import daughter from "../images/character images/daughter.jpeg";
import friede from "../images/character images/friede.jpeg";
import sir from "../images/character images/sir.jpeg";
import settler from "../images/character images/settler.jpeg";
import painting from "../images/character images/painting.jpeg";
import livid from "../images/character images/livid.jpeg";
import hag from "../images/character images/hag.jpeg";
import lapp from "../images/character images/lapp.jpeg";
import shira from "../images/character images/shira.jpeg";
import preacher from "../images/character images/preacher.jpeg";
import argo from "../images/character images/argo.jpeg";
import filianore from "../images/character images/filianore.jpeg";
import moaning from "../images/character images/moaning.jpeg";
import hollow from "../images/character images/hollow.jpeg";
import ledo from "../images/character images/ledo.jpeg";
import "../css/Characters.css";

const sections = [
  {
    title: "Firelink Shrine",
    items: [
      { name: "Blacksmith Andre", src: andre },
      { name: "Fire Keeper", src: firekeeper },
      { name: "Leonhard the Ringfinger", src: leonhard },
      { name: "Ludleth of Courland", src: ludleth },
      { name: "Picklepum the Crow", src: pickle },
      { name: "Shrine Handmaid", src: shrine },
      { name: "Sirris of the Sunless Realms", src: sirris },
      { name: "Yuria of Londor", src: yuria },
    ],
  },
  {
    title: "High Wall of Lothric",
    items: [
      { name: "Greirat of the Undead Settlement", src: greirat },
      { name: "Emma, High Priestess of Lothric Castle", src: emma },
      { name: "Lion Knight Albert", src: lion },
    ],
  },
  {
    title: "Undead Settlement",
    items: [
      { name: "Yoel of Londor", src: yoel },
      { name: "Cornyx of the Great Swamp", src: cornyx },
      { name: "Siegward of Catarina", src: siegward },
      { name: "Irina of Carim", src: irina },
      { name: "Eygon of Carim", src: eygon },
      { name: "Velka the Goddess of Sin", src: velka },
      { name: "Holy Knight Hodrick", src: hodrick },
      { name: "Giant of the Undead Settlement", src: giant },
    ],
  },
  {
    title: "Road of Sacrifices",
    items: [
      { name: "Orbeck of Vinheim", src: orbeck },
      { name: "Anri of Astora", src: anri },
      { name: "Horace the Hushed", src: horace },
    ],
  },
  {
    title: "Cathedral of the Deep",
    items: [
      { name: "Rosaria, Mother of Rebirth", src: rosaria },
      { name: "Unbreakable Patches", src: patches },
      { name: "Slave Knight Gael", src: gael },
      { name: "Longfinger Kirk", src: kirk },
    ],
  },
  {
    title: "Farron Keep",
    items: [
      { name: "Hawkwood", src: hawkwood },
      { name: "Old Wolf of Farron", src: wolf },
      { name: "Yellowfinger Heysel", src: yellowfinger },
    ],
  },
  {
    title: "Smouldering Lake",
    items: [
      { name: "Knight Slayer Tsorig", src: slayer },
      { name: "Great Swamp Cuculus", src: cuculus },
    ],
  },
  {
    title: "Irithyll of the Boreal Valley",
    items: [
      { name: "Alva, Seeker of the Spurned", src: alva },
      { name: "Archdeacon McDonnell", src: archdeacon },
      { name: "Creighton the Wanderer", src: creighton },
      { name: "Londor Pale Shade", src: londor },
    ],
  },
  {
    title: "Irithyll Dungeon",
    items: [{ name: "Karla", src: karla }],
  },
  {
    title: "Anor Londo",
    items: [{ name: "Company Captain Yorshka", src: company }],
  },
  {
    title: "Grand Archives",
    items: [
      { name: "Black Hand Gotthard", src: gotthard },
      { name: "Black Hand Kamui", src: kamui },
      { name: "Daughter of Crystal Kriemhild", src: daughter },
    ],
  },
  {
    title: "Painted World of Ariandel",
    items: [
      { name: "Sister Friede", src: friede },
      { name: "Sir Vilhelm", src: sir },
      { name: "Corvian Settler", src: settler },
      { name: "Painting Woman", src: painting },
      { name: "Livid Pyromancer Dunnel", src: livid },
    ],
  },
  {
    title: "Dreg Heap",
    items: [
      { name: "Stone-humped Hag", src: hag },
      { name: "Lapp", src: lapp },
    ],
  },
  {
    title: "The Ringed City",
    items: [
      { name: "Shira", src: shira },
      { name: "Locust Preacher", src: preacher },
      { name: "Judicator Argo", src: argo },
      { name: "Filianore", src: filianore },
      { name: "Moaning Knight", src: moaning },
      { name: "Ringed City Hollow", src: hollow },
      { name: "Silver Knight Ledo", src: ledo },
    ],
  },
];

/* ========= Component ========= */
const Characters = () => {
  return (
    <section className="page">
      <h2>Characters</h2>
      <main>
        {sections.map((section, idx) => (
          <div key={idx}>
            <h2 className="boss-title">{section.title}:</h2>
            <div className="container band-dark">
              <div className="grid grid-4 character-grid">
                {section.items.map((c, i) => (
                  <article key={`${section.title}-${i}`} className="char-card">
                    <img src={c.src} alt={c.name} />
                    <button className="pill">{c.name}</button>
                  </article>
                ))}
              </div>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Characters;
