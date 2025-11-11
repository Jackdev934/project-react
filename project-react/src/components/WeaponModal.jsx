// src/components/WeaponModal.jsx
import React from "react";
import Modal from "./Modal";
import "../css/Weapons.css"; // reuse existing styles, plus boss-modal-content if you like

const WeaponModal = ({ weapon, isOpen, onClose }) => {
  if (!weapon) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={weapon.label}>
      <div className="weapon-modal-content boss-modal-content">
        {/* Big weapon image */}
        {weapon.src && (
          <img
            className="boss-modal-main-img"
            src={weapon.src}
            alt={weapon.label}
          />
        )}

        {/* Weapon class / type (e.g. "Straight Swords") */}
        {weapon.type && (
          <p>
            <strong>Weapon Class:</strong> {weapon.type}
          </p>
        )}

        {/* Optional description field if you add one later */}
        {weapon.description && (
          <p className="boss-modal-text">{weapon.description}</p>
        )}

        {/* Optional list of example weapons under this subclass */}
        {weapon.examples && weapon.examples.length > 0 && (
          <div className="weapon-modal-examples">
            <h4>Example Weapons</h4>
            <ul>
              {weapon.examples.map((ex, i) => (
                <li key={i}>
                  <strong>{ex.name}</strong>
                  {ex.note ? ` — ${ex.note}` : ""}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default WeaponModal;
