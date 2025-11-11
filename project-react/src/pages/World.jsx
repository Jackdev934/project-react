// src/pages/Worlds.jsx
import { useState, useEffect } from "react";
import "../css/World.css";
import ImageGrid from "../components/Image Grid";
import Modal from "../components/Modal";

const buildImgUrl = (img) => {
  if (!img) return null;
  if (img.startsWith("http://") || img.startsWith("https://")) return img;
  if (img.startsWith("/")) return `http://localhost:3001${img}`;
  return `http://localhost:3001/${img}`;
};

const Worlds = () => {
  const [worlds, setWorlds] = useState([]);
  const [selectedWorld, setSelectedWorld] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWorlds = async () => {
      try {
        console.log("🌐 Fetching worlds from backend...");
        const res = await fetch("http://localhost:3001/api/worlds");

        if (!res.ok) {
          throw new Error(`Server responded with status ${res.status}`);
        }

        const data = await res.json();
        console.log("✅ Worlds API response:", data);

        const withImages = data.map((world) => {
          const src = buildImgUrl(world.imgs?.[0]);
          console.log(`🖼 World "${world.name}" image src:`, src);
          return {
            ...world,
            src,
            alt: world.name,
            label: world.name,
          };
        });

        setWorlds(withImages);
        setError("");
      } catch (err) {
        console.error("❌ Error fetching worlds:", err);
        setError("Failed to load world data from the server.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchWorlds();
  }, []);

  const handleItemClick = (item) => setSelectedWorld(item);
  const closeModal = () => setSelectedWorld(null);

  const mainWorlds = worlds.filter((w) => !w.isDlc);
  const dlcWorlds = worlds.filter((w) => w.isDlc);

  return (
    <section className="page">
      <h2>Worlds</h2>

      {isLoading && <p>Loading worlds...</p>}
      {error && <p className="error-text">{error}</p>}

      {!isLoading && !error && worlds.length === 0 && (
        <p>No worlds data found from the server.</p>
      )}

      {!isLoading && !error && worlds.length > 0 && (
        <>
          <h2 className="boss-title">Main Game Areas:</h2>
          <div className="container band-dark">
            <ImageGrid
              items={mainWorlds}
              wrapperClass="grid grid-4 boss-grid"
              imgClass="art-img"
              onItemClick={handleItemClick}
            />
          </div>

          <h2 className="boss-title">DLC Areas:</h2>
          <div className="container band-dark">
            <ImageGrid
              items={dlcWorlds}
              wrapperClass="grid grid-4 boss-grid"
              imgClass="art-img"
              onItemClick={handleItemClick}
            />
          </div>
        </>
      )}

      <Modal
        isOpen={!!selectedWorld}
        onClose={closeModal}
        title={selectedWorld?.name || ""}
      >
        {selectedWorld && (
          <div className="boss-modal-content">
            {selectedWorld.src && (
              <>
                <img
                  className="boss-modal-main-img"
                  src={selectedWorld.src}
                  alt={selectedWorld.name}
                />
                {/* Debug: show URL under the image temporarily */}
                <p style={{ fontSize: "0.75rem", wordBreak: "break-all" }}>
                  Image URL: {selectedWorld.src}
                </p>
              </>
            )}

            {selectedWorld.text && (
              <p className="boss-modal-text">{selectedWorld.text}</p>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Worlds;
