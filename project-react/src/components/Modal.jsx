// src/components/Modal.jsx
import React from "react";
import "./../css/Modal.css";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; // Don't render anything if closed

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        {title && <h3 className="modal-title">{title}</h3>}

        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
