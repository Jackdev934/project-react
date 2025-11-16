import { useState } from "react";
import "../css/Guides.css";
import Modal from "../components/Modal";

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
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState({
    title: "",
    videoId: ""
  });

  // Call this when a guide card is clicked
  const openVideo = (title, videoId) => {
    setActiveVideo({ title, videoId });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveVideo({ title: "", videoId: "" });
  };

  return (
    <section className="page">
      <h2>Guides &amp; Walkthrough</h2>

      <main>
        <div className="container">
          {/* Band 1 */}
          <div className="band-brown guide-band">
            <h2>Main Story Full Guides</h2>
            <div className="grid grid-3">
              <figure
                className="guide-card"
                onClick={() =>
                  openVideo(
                    "Dark Souls 3 - Full Game Walkthrough",
                    "RhiOxTfhFDc"
                  )
                }
              >
                <img
                  src={guide1}
                  alt="Dark Souls 3 - Full Game Walkthrough"
                />
                <figcaption>
                  Dark Souls 3 - Full Game Walkthrough
                </figcaption>
              </figure>

              <figure
                className="guide-card"
                onClick={() =>
                  openVideo(
                    "Cemetery of Ash Guide 100%",
                    "LZpfpORA8Ww"
                  )
                }
              >
                <img src={guide2} alt="Cemetery of Ash Guide" />
                <figcaption>Cemetery of Ash Guide 100%</figcaption>
              </figure>

              <figure
                className="guide-card"
                onClick={() =>
                  openVideo(
                    "Dark Souls 3 Walkthrough (No Commentary)",
                    "tzg1sRN7lNY"
                  )
                }
              >
                <img
                  src={guide3}
                  alt="Dark Souls 3 Walkthrough (No Commentary)"
                />
                <figcaption>
                  Dark Souls 3 Walkthrough (No Commentary)
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="divider-line"></div>

          {/* Band 2 */}
          <div className="band-brown guide-band">
            <h2>Questline Walkthrough</h2>
            <div className="grid grid-3">
              <figure
                className="guide-card"
                onClick={() =>
                  openVideo("Greirat's Questline", "xSkJsnMUMbg")
                }
              >
                <img src={quest1} alt="Greirat's Questline" />
                <figcaption>Greirat&apos;s Questline</figcaption>
              </figure>

              <figure
                className="guide-card"
                onClick={() =>
                  openVideo("Siegward Questline", "oavv4PaIf_Y")
                }
              >
                <img src={quest2} alt="Siegward Questline" />
                <figcaption>Siegward Questline</figcaption>
              </figure>

              <figure
                className="guide-card"
                onClick={() =>
                  openVideo("Unbreakable Patches Guide", "dB9v-Wo9KoI")
                }
              >
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
              <figure
                className="guide-card"
                onClick={() =>
                  openVideo("Soul of Cinder Guide", "Am2N-50IVWc")
                }
              >
                <img src={boss1} alt="Soul of Cinder Guide" />
                <figcaption>Soul of Cinder Guide</figcaption>
              </figure>

              <figure
                className="guide-card"
                onClick={() =>
                  openVideo("Slave Knight Gael Guide", "baKDMyBDnm8")
                }
              >
                <img src={boss2} alt="Slave Knight Gael Guide" />
                <figcaption>Slave Knight Gael Guide</figcaption>
              </figure>

              <figure
                className="guide-card"
                onClick={() =>
                  openVideo("Abyss Watchers Guide", "r-kLayF8BEM")
                }
              >
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
              <figure
                className="guide-card"
                onClick={() =>
                  openVideo(
                    "How to find Chameleon Spell",
                    "Jm_Sr6VGZLg"
                  )
                }
              >
                <img src={find1} alt="How to find Chameleon Spell" />
                <figcaption>How to find Chameleon Spell</figcaption>
              </figure>

              <figure
                className="guide-card"
                onClick={() =>
                  openVideo(
                    "Where to Find Fume Ultra Greatsword",
                    "SjV9vUf8bKU"
                  )
                }
              >
                <img
                  src={find2}
                  alt="Where to Find Fume Ultra Greatsword"
                />
                <figcaption>
                  Where to Find Fume Ultra Greatsword
                </figcaption>
              </figure>

              <figure
                className="guide-card"
                onClick={() =>
                  openVideo(
                    "How to get Boss Weapons",
                    "TxdbPS2Y08M"
                  )
                }
              >
                <img src={find3} alt="How to get Boss Weapons" />
                <figcaption>How to get Boss Weapons</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </main>

      {/* Video Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={activeVideo.title}
      >
        {activeVideo.videoId && (
          <div className="video-wrapper">
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${activeVideo.videoId}`}
              title={activeVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Guides;
