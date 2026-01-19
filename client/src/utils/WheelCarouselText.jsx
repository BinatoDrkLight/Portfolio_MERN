import { useEffect, useRef } from "react";

export default function WheelCarousel({ className, radius, sentences }) {
  const items = sentences;
  const COUNT = items.length;
  const STEP = 360 / COUNT;
  const RADIUS = radius;
  const SCROLL_SPEED = 0.08;
  const HOVER_MARGIN = 200;

  const angleRef = useRef(0);
  const itemRefs = useRef([]);
  const snapTimer = useRef(null);
  const containerRef = useRef(null);

  const lastPointerY = useRef(null);

  useEffect(() => {
    update();

    const container = containerRef.current;
    if (!container) return;

    /* =======================
       WHEEL (DESKTOP)
    ======================= */
    const onWheel = (e) => {
      const rect = container.getBoundingClientRect();
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

    /* =======================
       POINTER (TOUCH + DRAG)
    ======================= */
    const onPointerDown = (e) => {
      lastPointerY.current = e.clientY;
      container.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e) => {
      if (lastPointerY.current === null) return;

      const deltaY = lastPointerY.current - e.clientY;
      lastPointerY.current = e.clientY;

      clearTimeout(snapTimer.current);
      angleRef.current += deltaY * SCROLL_SPEED * 1.5;
      update();

      snapTimer.current = setTimeout(snap, 120);
    };

    const onPointerUp = () => {
      lastPointerY.current = null;
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    container.addEventListener("pointerdown", onPointerDown);
    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerup", onPointerUp);
    container.addEventListener("pointercancel", onPointerUp);

    return () => {
      container.removeEventListener("wheel", onWheel);
      container.removeEventListener("pointerdown", onPointerDown);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerup", onPointerUp);
      container.removeEventListener("pointercancel", onPointerUp);
    };
  }, []);

  /* =======================
     POSITION UPDATE
  ======================= */
  const update = () => {
    const activeIndex = getActiveIndex();

    itemRefs.current.forEach((el, i) => {
      if (!el) return;

      const angle = ((STEP * i + angleRef.current) * Math.PI) / 180;
      const x = Math.cos(angle) * RADIUS;
      const y = Math.sin(angle) * RADIUS;

      const diff = Math.min(
        (i - activeIndex + COUNT) % COUNT,
        (activeIndex - i + COUNT) % COUNT
      );

      let scale = 0.8;
      let opacity = 0;

      if (diff <= 2) {
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
        } else {
          scale = 1;
          opacity = 0.6;
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

  /* =======================
     SNAP TO ITEM
  ======================= */
  const snap = () => {
    angleRef.current = Math.round(angleRef.current / STEP) * STEP;

    itemRefs.current.forEach((el) => {
      if (!el) return;
      el.style.transition =
        "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease";
    });

    update();

    setTimeout(() => {
      itemRefs.current.forEach((el) => {
        if (!el) return;
        el.style.transition = "none";
      });
    }, 400);
  };

  const getActiveIndex = () => {
    const index = Math.round((-angleRef.current % 360) / STEP);
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
          touchAction: "none", // 🔥 critical for mobile
        }}
      >
        {items.map((label, i) => (
          <div
            className={className}
            key={i}
            ref={(el) => (itemRefs.current[i] = el)}
            style={{
              position: "absolute",
              left: 0,
              top: "50%",
              transformOrigin: "center center",
              whiteSpace: "nowrap",
              userSelect: "none",
              cursor: "grab",
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