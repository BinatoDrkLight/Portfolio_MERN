import { useEffect, useState } from "react";
import Firefly from "./Firefly";

function FireflyContainer({ count = 500 }) {
  const [pageHeight, setPageHeight] = useState(document.body.scrollHeight);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateSize = () => {
      setPageHeight(document.body.scrollHeight);
      setPageWidth(window.innerWidth);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="firefly-container" style={{ height: pageHeight + "px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <Firefly
          key={i}
          index={i}
          pageHeight={pageHeight}
          pageWidth={pageWidth}
        />
      ))}
    </div>
  );
}

export default FireflyContainer;
