import React, { useEffect, useRef } from "react";

export default function Modal({ open, onClose, title, children }) {
  const backdropRef = useRef(null);
  const firstFocusable = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose?.();
      if (e.key === "Tab" && firstFocusable.current) {
        const focusable = backdropRef.current?.querySelectorAll(
          'a, button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    }

    if (open) {
      document.addEventListener("keydown", onKey);
      setTimeout(() => firstFocusable.current?.focus(), 0);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={backdropRef}
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={(e) => {
        if (e.target === backdropRef.current) onClose?.();
      }}
    >
      <div className="modal-panel">
        <div className="modal-header">
          <h4 className="modal-title">{title}</h4>
          <button className="icon-btn" onClick={onClose} aria-label="Close dialog">×</button>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button ref={firstFocusable} className="btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
