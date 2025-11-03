import { useEffect, useState, useMemo } from "react";
import "../css/Slideshow.css";

const Slideshow = ({ images: imagesProp, altPrefix = "Slide" }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  // If no images are passed in, fall back to loading from /images/slideshow
  const images = useMemo(() => {
    if (imagesProp && imagesProp.length) return imagesProp;
    try {
      const importAll = (r) => r.keys().map(r);
      return importAll(require.context("../images/slideshow", false, /\.(png|jpe?g|svg|webp)$/i));
    } catch {
      return [];
    }
  }, [imagesProp]);

  const slideForward = () => {
    if (!images.length) return;
    setSlideIndex((prev) => (prev + 1) % images.length);
  };

  const slideBackward = () => {
    if (!images.length) return;
    setSlideIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Optional: allow keyboard arrows to navigate when focused
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") slideForward();
      if (e.key === "ArrowLeft") slideBackward();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images.length]);

  if (!images.length) return null;

  return (
    <section id="slideshow" aria-label="Image slideshow">
      <img
        src={images[slideIndex]}
        alt={`${altPrefix} ${slideIndex + 1} of ${images.length}`}
        className="slide-image"
      />
      <button
        className="arrow"
        id="left-arrow"
        onClick={slideBackward}
        type="button"
        aria-label="Previous slide"
      >
        &lt;
      </button>
      <button
        className="arrow"
        id="right-arrow"
        onClick={slideForward}
        type="button"
        aria-label="Next slide"
      >
        &gt;
      </button>
    </section>
  );
};

export default Slideshow;
