import { useEffect, useState } from "react";

function InfiniteSlider({ images, interval = 4000 }) {
  if (!images || images.length === 0) return null;

  const slides = [images[images.length - 1], ...images, images[0]];

  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    const slideInterval = setInterval(() => setIndex((prev) => prev + 1), interval);
    return () => clearInterval(slideInterval);
  }, [interval]);

  useEffect(() => {
    if (index === slides.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setIndex(1);
      }, 1000);
    }

    if (index === 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(slides.length - 2);
      }, 1000);
    }

    const timeout = setTimeout(() => setTransition(true), 1100);
    return () => clearTimeout(timeout);
  }, [index, slides.length]);

  const sliderWindow = {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: "10px",
    backgroundColor: "#f5f5f5"
  };

  const sliderTrack = {
    display: "flex",
    transform: `translateX(-${index * 100}%)`,
    transition: transition ? "transform 1s ease-in-out" : "none",
    height: "100%"
  };

  const slideStyle = {
    flexShrink: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  const imageStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
    display: "block"
  };

  return (
    <div style={sliderWindow}>
      <div style={sliderTrack}>
        {slides.map((img, i) => (
          <div key={i} style={slideStyle}>
            <img src={img} alt={`slide-${i}`} style={imageStyle} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfiniteSlider;
