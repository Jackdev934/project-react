import "../css/Community.css";

/* ========= Image Imports ========= */
import art1 from "../images/artwork/art1.jpeg";
import art2 from "../images/artwork/art2.jpeg";
import art3 from "../images/artwork/art3.jpeg";
import art4 from "../images/artwork/art4.jpeg";
import art5 from "../images/artwork/art5.jpeg";
import art6 from "../images/artwork/art6.jpeg";
import art7 from "../images/artwork/art7.jpeg";
import art8 from "../images/artwork/art8.jpeg";
import art9 from "../images/artwork/art9.jpeg";
import art10 from "../images/artwork/art10.jpeg";
import art11 from "../images/artwork/art11.jpeg";
import art12 from "../images/artwork/art12.jpeg";
import art13 from "../images/artwork/art13.jpg";
import art14 from "../images/artwork/art14.jpeg";
import art15 from "../images/artwork/art15.jpeg";
import art16 from "../images/artwork/art16.jpg";
import art17 from "../images/artwork/art17.jpg";
import art18 from "../images/artwork/art18.jpg";

const Community = () => {
  return (
    <section className="page">
      <h2>Community</h2>

      <main className="container grid grid-2 community-wrap">
        {/* LEFT SIDE — Community Artwork */}
        <section className="band-dark community-left">
          <div className="community-artwork">
            <h3>Community Artwork</h3>

            {/* Upload button */}
            <button className="upload-btn">Upload an Image</button>

            {/* Artwork grid */}
            <div className="art-grid">
              {/* Only include images that actually exist */}
              {[art1, art2, art3, art4, art5, art6, art16, art17, art18].map(
                (src, i) => (
                  <img
                    key={i}
                    src={src}
                    className="art-img"
                    alt={`Community Art ${i + 1}`}
                  />
                )
              )}
            </div>
          </div>
        </section>

        {/* RIGHT SIDE — Subsections */}
        <aside className="community-right">
          <section className="band-dark">
            <h3>Bosses Artwork</h3>
            <div className="grid grid-3 comm-grid">
              {[art7, art8, art9].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  className="art-img"
                  alt={`Boss Art ${i + 1}`}
                />
              ))}
            </div>
          </section>

          <section className="band-dark">
            <h3>In Game Pictures</h3>
            <div className="grid grid-3 comm-grid">
              {[art13, art14, art15].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  className="art-img"
                  alt={`In Game ${i + 1}`}
                />
              ))}
            </div>
          </section>

          <section className="band-dark">
            <h3>Characters Artwork</h3>
            <div className="grid grid-3 comm-grid">
              {[art10, art11, art12].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  className="art-img"
                  alt={`Character Art ${i + 1}`}
                />
              ))}
            </div>
          </section>
        </aside>
      </main>
    </section>
  );
};

export default Community;
