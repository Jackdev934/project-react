import React from "react";

// Wrapper for your grid classes
// Default matches ".grid .grid-3 .comm-grid" style you used
export default function Grid({ children, className = "grid grid-3 comm-grid" }) {
  return <div className={className}>{children}</div>;
}
