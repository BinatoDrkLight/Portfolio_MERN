function Firefly({ index, pageHeight, pageWidth }) {
  const size = Math.random() * (18 - 10) + 10;

  const left = Math.random() * (pageWidth - size);
  const top = Math.random() * (pageHeight - size);

  const moveX = (Math.random() * 200) - 100;
  const moveY = (Math.random() * 200) - 100;

  const flickerDuration = 3 + Math.random() * 2;
  const moveDuration = 8 + Math.random() * 7;

  return (
    <div
      className="firefly"
      style={{
        width: size + "px",
        height: size + "px",
        left: left + "px",
        top: top + "px",
        '--move-x': `${moveX}px`,
        '--move-y': `${moveY}px`,
        '--move-duration': `${moveDuration}s`,
        '--flicker-duration': `${flickerDuration}s`,
        animationDelay: `${Math.random() * 5}s`,
      }}
    ></div>
  );
}

export default Firefly;
