// src/pages/Characters.jsx
import { useState, useEffect } from "react";
import "../css/Characters.css";
import ImageGrid from "../components/Image Grid";
import Modal from "../components/Modal";

// Helper to build a full URL from backend paths like "/images/characters/andre.jpeg"
const buildImgUrl = (img) => {
  if (!img) return null;
  if (img.startsWith("http://") || img.startsWith("https://")) return img;
  if (img.startsWith("/")) return `https://project-backend-fl7h.onrender.com${img}`;
  return `https://project-backend-fl7h.onrender.com/${img}`;
};

const Characters = () => {
  const [sections, setSections] = useState([]);
  const [selectedChar, setSelectedChar] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        console.log("Fetching characters from backend...");
        const res = await fetch("https://project-backend-fl7h.onrender.com/api/characters");

        if (!res.ok) {
          throw new Error(`Server responded with status ${res.status}`);
        }

        const data = await res.json();
        console.log("Characters API response:", data);

        // Attach primary image URL + some helpful fields
        const withImages = data.map((char) => ({
          ...char,
          src: buildImgUrl(char.imgs?.[0]),
          alt: char.name,
          label: char.name,
        }));

        console.log("Characters after adding images:", withImages);

        // Group by area (Firelink Shrine, Undead Settlement, etc.)
        const byArea = {};
        for (const char of withImages) {
          const area = char.area || "Other";
          if (!byArea[area]) byArea[area] = [];
          byArea[area].push(char);
        }

        const newSections = Object.keys(byArea).map((area) => ({
          title: area,
          items: byArea[area],
        }));

        console.log("Final sections for Characters page:", newSections);

        setSections(newSections);
        setError("");
      } catch (err) {
        console.error("Error fetching characters:", err);
        setError("Failed to load character data from the server.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  const handleItemClick = (item) => {
    setSelectedChar(item);
  };

  const closeModal = () => setSelectedChar(null);

  return (
    <section className="page">
      <h2>Characters</h2>

      {isLoading && <p>Loading characters...</p>}
      {error && <p className="error-text">{error}</p>}

      {!isLoading && !error && sections.length === 0 && (
        <p>No character data found from the server.</p>
      )}

      {!isLoading && !error && sections.length > 0 && (
        <main>
          {sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="boss-title">{section.title}:</h2>
              <div className="container band-dark">
                <ImageGrid
                  items={section.items}
                  wrapperClass="grid grid-4 character-grid"
                  imgClass="art-img"
                  onItemClick={handleItemClick}
                />
              </div>
            </div>
          ))}
        </main>
      )}

      {/* Modal for character details */}
      <Modal
        isOpen={!!selectedChar}
        onClose={closeModal}
        title={selectedChar?.name || ""}
      >
        {selectedChar && (
          <div className="character-modal-content boss-modal-content">
            {selectedChar.src && (
              <img
                className="boss-modal-main-img"
                src={selectedChar.src}
                alt={selectedChar.name}
              />
            )}

            {selectedChar.area && (
              <p>
                <strong>Area:</strong> {selectedChar.area}
              </p>
            )}

            {selectedChar.text && (
              <p className="boss-modal-text">{selectedChar.text}</p>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Characters;
