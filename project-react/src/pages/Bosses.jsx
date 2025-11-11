// src/pages/Bosses.jsx
import { useState, useEffect } from "react";
import "./../css/Bosses.css";
import ImageGrid from "../components/Image Grid";
import Modal from "../components/Modal";
import BACKEND_URL from "../config";

// Build full URL for image (works with /images/... from backend)
const buildImgUrl = (img) => {
  if (!img) return null;
  if (img.startsWith("http://") || img.startsWith("https://")) return img;
  if (img.startsWith("/")) return `https://project-backend-fl7h.onrender.com${img}`;
  return `https://project-backend-fl7h.onrender.com${img}`;
};

const Bosses = () => {
  const [bosses, setBosses] = useState([]);
  const [selectedBoss, setSelectedBoss] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBosses = async () => {
      try {
        const res = await fetch(`https://project-backend-fl7h.onrender.com/api/bosses`);

        if (!res.ok) {
          throw new Error(`Server responded with status ${res.status}`);
        }

        const data = await res.json();

        const withImages = data.map((boss) => ({
          ...boss,
          src: buildImgUrl(boss.imgs?.[0]),
          alt: boss.label || boss.name,
          label: boss.label || boss.name,
        }));

        setBosses(withImages);
        setError("");
      } catch (err) {
        console.error("Error fetching bosses:", err);
        setError("Failed to load boss data from the server.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBosses();
  }, []);

  const handleItemClick = (item) => setSelectedBoss(item);
  const closeModal = () => setSelectedBoss(null);

  const mainBosses = bosses.filter((b) => !b.isDlc);
  const dlcBosses = bosses.filter((b) => b.isDlc);

  return (
    <>
      <h2 className="boss-title">Main Game Bosses:</h2>

      <div className="container band-dark">
        {isLoading && <p>Loading bosses...</p>}
        {error && <p className="error-text">{error}</p>}

        {!isLoading && !error && (
          <ImageGrid
            items={mainBosses}
            wrapperClass="grid grid-4 boss-grid"
            imgClass="art-img"
            onItemClick={handleItemClick}
          />
        )}
      </div>

      <h2 className="boss-title">DLC Bosses:</h2>

      <div className="container band-dark">
        {isLoading && <p>Loading DLC bosses...</p>}
        {error && <p className="error-text">{error}</p>}

        {!isLoading && !error && (
          <ImageGrid
            items={dlcBosses}
            wrapperClass="grid grid-4 boss-grid"
            imgClass="art-img"
            onItemClick={handleItemClick}
          />
        )}
      </div>

      <Modal
        isOpen={!!selectedBoss}
        onClose={closeModal}
        title={selectedBoss?.label || selectedBoss?.name || ""}
      >
        {selectedBoss && (
          <div className="boss-modal-content">
            {selectedBoss.src && (
              <img
                className="boss-modal-main-img"
                src={selectedBoss.src}
                alt={selectedBoss.alt || selectedBoss.label || selectedBoss.name}
              />
            )}

            {selectedBoss.text && (
              <p className="boss-modal-text">{selectedBoss.text}</p>
            )}

            {selectedBoss.location && (
              <p>
                <strong>Location:</strong> {selectedBoss.location}
              </p>
            )}

            {selectedBoss.optional && (
              <p>
                <em>Optional boss</em>
              </p>
            )}
          </div>
        )}
      </Modal>
    </>
  );
};

export default Bosses;
