import { useEffect, useState } from "react";
import "../css/Weapons.css";
import Modal from "../components/Modal";
import BACKEND_URL from "../config";

/* ========= Small presentational components ========= */

const SubclassCard = ({ subclass, onClick }) => (
  <article className="subclass-card" onClick={onClick}>
    {subclass.icon && (
      <img
        src={`${BACKEND_URL}${subclass.icon}`}
        alt={subclass.label}
      />
    )}
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
  const [weaponSections, setWeaponSections] = useState([]);
  const [selectedSubclass, setSelectedSubclass] = useState(null);
  const [selectedWeaponIndex, setSelectedWeaponIndex] = useState(0);

  // Fetch weapons from backend and group them into sections/subclasses
  useEffect(() => {
    const fetchWeapons = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/weapons`);
        const data = await res.json();

        // Build: category → subclass → weapons[]
        const sectionsMap = new Map();

        data.forEach((w) => {
          if (!sectionsMap.has(w.category)) {
            sectionsMap.set(w.category, new Map());
          }
          const subMap = sectionsMap.get(w.category);

          if (!subMap.has(w.subclass)) {
            subMap.set(w.subclass, {
              id: w.subclass,
              label: w.subclass,
              icon: (w.imgs && w.imgs[0]) || null,
              weapons: []
            });
          }

          const subclassObj = subMap.get(w.subclass);
          subclassObj.weapons.push({
            name: w.name,
            img: (w.imgs && w.imgs[0]) || null,
            type: w.type,
            scaling: w.scaling,
            requirements: w.requirements,
            description: w.description
          });
        });

        const finalSections = Array.from(sectionsMap.entries()).map(
          ([categoryName, subMap]) => ({
            title: categoryName,
            subclasses: Array.from(subMap.values())
          })
        );

        setWeaponSections(finalSections);
      } catch (err) {
        console.error("Failed to fetch weapons:", err);
      }
    };

    fetchWeapons();
  }, []);

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
            {currentWeapon.img && (
              <img
                className="weapon-modal-icon"
                src={`${BACKEND_URL}${currentWeapon.img}`}
                alt={currentWeapon.name}
              />
            )}

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
