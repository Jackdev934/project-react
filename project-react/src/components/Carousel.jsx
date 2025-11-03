import React, { useEffect, useRef, useState } from "react";

// Lightweight slideshow with arrows + dots + optional autoplay
// Usage: <Carousel images={["/a.jpg","/b.jpg"]} autoPlay interval={5000} />
export default function Carousel({ images = [], autoPlay = true, interval = 5000, className = "carousel" }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % images.length), interval);
    return () => clearInterval(timerRef.current);
  }, [autoPlay, interval, images.length]);

  if (!images.length) return null;

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className={className}>
      <button className="carousel-prev" aria-label="Previous slide" onClick={prev}>❮</button>
      <div className="carousel-viewport">
        <img src={images[index]} alt={`Slide ${index + 1}`} />
      </div>
      <button className="carousel-next" aria-label="Next slide" onClick={next}>❯</button>
      <div className="carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
