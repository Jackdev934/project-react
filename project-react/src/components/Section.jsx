import React from "react";

// Section wrapper matching your .band-dark, h3 headings, etc.
// Usage: <Section id="community" title="Community Artwork" subtitle="Fan creations">...</Section>
export default function Section({ id, title, subtitle, children, className = "band-dark" }) {
  return (
    <section id={id} className={className}>
      {title && <h3>{title}</h3>}
      {subtitle && <p className="subtle">{subtitle}</p>}
      <div className="section-body">{children}</div>
    </section>
  );
}
