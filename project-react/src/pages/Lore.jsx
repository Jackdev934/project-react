import { Link } from "react-router-dom";
import "../css/Lore.css";

/* ========= Image Imports ========= */
import lore1 from "../images/lore img/lore1.jpeg";
import lore2 from "../images/lore img/lore2.jpeg";
import lore3 from "../images/lore img/lore3.jpeg";
import lore4 from "../images/lore img/lore4.jpeg";
import lore5 from "../images/lore img/lore5.jpeg";
import lore6 from "../images/lore img/lore6.jpeg";
import lore7 from "../images/lore img/lore7.jpeg";
import lore8 from "../images/lore img/lore8.jpeg";
import lore9 from "../images/lore img/lore9.jpeg";

const Lore = () => {
  return (
    <section className="page">
      <h2>Lore &amp; Story</h2>

      <main className="container band-dark lore-wrap">
        {/* Left column: Lore text + buttons */}
        <section className="band-brown lore-left">
          <h3>Main story lore:</h3>
          <p>
            Dark Souls III is set in the kingdom of Lothric, where the Age of Fire is collapsing and the First Flame fades after countless cycles.
            Once, gods and heroes sacrificed themselves to preserve it, but the Lords of Cinder have now abandoned their thrones. As the world fractures 
            and time and space converge, an Unkindled known as the Ashen One rises. Tasked with an impossible duty, they must return the Lords to their thrones 
            and confront the fading light itself.
          </p>
          <p>
            The Lords of Cinder represent the corruption and futility of the cycle they once upheld. Aldrich, once a cleric, became a cannibalistic sludge who now  
            dreams of a world drowned in darkness. Yhorm the Giant linked the fire to protect his people but watched his kingdom fall, while the Abyss Watchers, sworn 
            to fight the Abyss, destroyed themselves in endless infighting. Finally, Prince Lothric, guarded by his brother Lorian, rejected the duty entirely, embodying 
            the refusal of a new generation to continue the fading flame.
          </p>
          <p>
            The Ashen One’s journey spans lands that echo past ages, each reflecting the collapse of the world. The Undead Settlement and Cathedral of the Deep reveal
            despair and Aldrich’s cult, while Farron Keep and its Abyss Watchers show the corruption of oaths. Irithyll, ruled by Pontiff Sulyvahn, binds gods in chains 
            and enthrones Aldrich in a desecrated Anor Londo, while the Profaned Capital smolders under a cursed flame. Finally, the Grand Archives and Lothric Castle 
            expose the royal family’s rejection of sacrifice, as all these places converge into one dying land on the brink of its end.
          </p>
          <p>
            On their journey, the Ashen One meets figures that mirror humanity’s varied responses to a dying age. Pilgrims collapse in futile devotion, 
            Fire Keepers quietly preserve the flame, and opportunists like Pontiff Sulyvahn exploit the chaos for power. Even gods and dragons have fallen, with 
            Gwyndolin devoured by Aldrich and ancient beasts reduced to shadows. In this world of decay and repetition, the Ashen One stands as both weakest and 
            strongest—an Unkindled failure who alone endures where greater champions have failed.
          </p>
          <p>
            The Ashen One’s journey ends at the Kiln of the First Flame, where time and reality collapse into ash. There they battle the Soul of Cinder, a fusion 
            of all who linked the fire before, embodying the weight of the cycle. With its fall, the Ashen One must choose: rekindle the fading flame, let it die 
            into the Age of Dark, or usurp it as Lord of Hollows to create a new order of mankind. Each ending offers no final resolution, only a statement on whether 
            the cycle is continued, broken, or remade.
          </p>

          <div className="grid grid-2 lore-buttons">
            <Link to="/bosses" className="lore-btn">Boss Lore</Link>
            <Link to="/world" className="lore-btn">Location Lore</Link>
            <Link to="/characters" className="lore-btn">Character Lore</Link>
            <Link to="/weapons" className="lore-btn">Weapons Lore</Link>
          </div>
        </section>

        {/* Right column */}
        <aside className="band-brown lore-right">
          <div className="aside-images-lore">
            <img src={lore1} alt="Lore Image 1" />
            <img src={lore2} alt="Lore Image 2" />
            <img src={lore4} alt="Lore Image 4" />
          </div>
        </aside>

        <section className="band-brown lore-left">
          <h2>Ashes Of Ariandel Lore:</h2>
          <p>
            In Ashes of Ariandel, the Ashen One is drawn into the Painted World of Ariandel, a frozen land created to preserve discarded beings 
            and forgotten histories. The world rots beneath its snow, consumed by fire and corruption, yet its inhabitants cling desperately to the 
            illusion of purity. Sister Friede, a follower of the Dark, rejects fire and seeks to preserve the rot in stillness, aided by Father Ariandel who 
            sacrifices himself to maintain the painted world. To free the painting for renewal, the Ashen One must slay them both, ending the cycle of decay so 
            a new world may be painted in its ashes.
          </p>

          <div id="ash-images" className="grid grid-2 lore-buttons">
            <img src={lore3} alt="Lore Image 3" />
            <img src={lore5} alt="Lore Image 5" />
            <img src={lore8} alt="Lore Image 8" />
            <img src={lore9} alt="Lore Image 9" />
          </div>
        </section>

        <section className="band-brown lore-left">
          <h2>The Ringed City Lore:</h2>
          <p>
            The Ringed City leads the Ashen One to the literal end of the world, where all lands and ages collapse into ash. Here lies the city built for
            the Pygmy Lords, the first bearers of the Dark Soul, now enslaved and ruined by Gwyn’s legacy. The player faces Slave Knight Gael, who has consumed 
            the Dark Soul itself in his desperate quest to bring pigment to a new painter and create a new world. By defeating Gael, the Ashen One delivers the blood 
            of the Dark Soul to the Painter, leaving the future of the world in her hands, as the fire truly dies and only humanity’s legacy remains.
          </p>

          <img src={lore6} alt="Lore Image 6" />
          <img src={lore7} alt="Lore Image 7" />
        </section>
      </main>
    </section>
  );
};

export default Lore;
