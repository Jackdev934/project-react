// src/components/ImageGrid.jsx
import React from "react";

export default function ImageGrid({
  // legacy props (still work)
  images = [],
  imgAltPrefix = "Image",

  // newer props
  items,
  renderItem,
  imgClass = "art-img",
  wrapperClass = "grid grid-4 comm-grid",

  // NEW: optional click handler for things like modals
  onItemClick,
}) {
  const useItems = Array.isArray(items) && items.length > 0;

  const data = useItems
    ? items
    : images.map((src, i) => ({
        src,
        alt: `${imgAltTitle(imgAltPrefix)} ${i + 1}`,
      }));

  return (
    <div className={wrapperClass}>
      {data.map((item, i) => {
        if (renderItem) {
          // if you want, you can handle clicks inside your custom renderItem
          return renderItem(item, i);
        }

        // default rendering: figure with optional label
        return (
          <figure
            key={i}
            className="boss-card"
            onClick={onItemClick ? () => onItemClick(item, i) : undefined}
            style={onItemClick ? { cursor: "pointer" } : undefined}
          >
            <img
              src={item.src}
              alt={item.alt || `${imgAltTitle(imgAltPrefix)} ${i + 1}`}
              className={imgClass}
              loading="lazy"
            />
            {item.label ? <button className="pill">{item.label}</button> : null}
          </figure>
        );
      })}
    </div>
  );
}

function imgAltTitle(prefix) {
  return prefix && String(prefix).trim().length ? prefix : "Image";
}
