import React from "react";


export default function ImageGrid({ images = [], imgAltPrefix = "Image", imgClass = "art-img", wrapperClass = "grid grid-3 comm-grid" }) {
  return (
    <div className={wrapperClass}>
      {images.map((src, i) => (
        <img key={i} src={src} className={imgClass} alt={`${imgAltTitle(imgAltPrefix)} ${i + 1}`} />
      ))}
    </div>
  );
}

function imgAltTitle(prefix) {
  return prefix && String(prefix).trim().length ? prefix : "Image";
}
