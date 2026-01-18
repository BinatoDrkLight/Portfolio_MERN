import { useEffect, useRef } from "react";

export default function WheelCarousel({className, radius, sentences}) {
  const items = sentences;
  const COUNT = items.length;
  const STEP = 360 / COUNT;
  const RADIUS = radius;
  const SCROLL_SPEED = 0.05;
  const HOVER_MARGIN = 200;

  const angleRef = useRef(0);
  const itemRefs = useRef([]);
  const snapTimer = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    update();

    const onWheel = (e) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > RADIUS + HOVER_MARGIN) return;

      e.preventDefault();
      clearTimeout(snapTimer.current);

      angleRef.current += e.deltaY * SCROLL_SPEED;
      update();

      snapTimer.current = setTimeout(snap, 120);
    };

    const container = containerRef.current;
    container.addEventListener("wheel", onWheel, { passive: false });

    return () => container.removeEventListener("wheel", onWheel);
  }, []);

  const update = () => {
    const activeIndex = getActiveIndex();

    itemRefs.current.forEach((el, i) => {
      const angle = ((STEP * i + angleRef.current) * Math.PI) / 180;
      const x = Math.cos(angle) * RADIUS;
      const y = Math.sin(angle) * RADIUS;

      const diff = Math.min(
        (i - activeIndex + COUNT) % COUNT,
        (activeIndex - i + COUNT) % COUNT
      );

      if (diff <= 2) {
        let scale = 1;
        let opacity = 0.5;

      if (i === activeIndex) {
            scale = 1.6;
            opacity = 1;
            el.style.color = "#8f00ff";
            el.style.fontWeight = "bold";
        } else if (diff === 1) {
            scale = 1.2;
            opacity = 0.8;
            el.style.color = "";
            el.style.fontWeight = "normal"; 
        } else if (diff === 2) {
            scale = 1.0;
            opacity = 0.6;
            el.style.color = "";
            el.style.fontWeight = "normal"; 
        } else {
            el.style.opacity = "0";
            el.style.color = "";
            el.style.fontWeight = "normal";
        }

        el.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
        el.style.opacity = opacity.toString();

      } else {
        el.style.opacity = "0";
      }
    });
  };

  const snap = () => {
    angleRef.current = Math.round(angleRef.current / STEP) * STEP;

    itemRefs.current.forEach((el) => {
      el.style.transition =
        "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease";
    });

    update();

    setTimeout(() => {
      itemRefs.current.forEach((el) => {
        el.style.transition = "none";
      });
    }, 400);
  };

  const getActiveIndex = () => {
    let index = Math.round((-angleRef.current % 360) / STEP);
    return (index + COUNT) % COUNT;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        ref={containerRef}
        style={{
          position: "absolute",
          width: RADIUS * 3,
          height: RADIUS * 3,
        }}
      >
        {items.map((label, i) => (
          <div
            className={className}
            key={i}
            ref={(el) => (itemRefs.current[i] = el)}
            style={{
              position: "absolute",
              left: "0",
              top: "50%",
              transformOrigin: "center center",
              whiteSpace: "nowrap",
              userSelect: "none",
              cursor: "pointer",
              transition: "none",
              willChange: "transform, opacity",
            }}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
