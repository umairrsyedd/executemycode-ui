import { useEffect, useRef, useState } from "react";

import styles from "./resizable.module.css";
import _ from "lodash";

export const enum Orientation {
  Horizontal = "X",
  Vertical = "Y",
}

export default function ResizableContainer({
  orientation,
  preLoadPercent,
  initialPx,
  maxPx,
  minPx,
  children,
}: {
  orientation: Orientation;
  preLoadPercent: number;
  initialPx: number;
  maxPx: number;
  minPx: number;
  children: React.ReactNode;
}) {
  const containerRef = useRef(null);
  const [currentPx, setPx] = useState(initialPx);
  const [isResizing, setIsResizing] = useState(false);

  const handleResizeStart = (event) => {
    setIsResizing(true);
    document.addEventListener("mousemove", handleResize);
    document.addEventListener("mouseup", handleResizeEnd);
  };

  const handleResize = (event) => {
    handleResizeThrottled(event);
  };

  const handleResizeThrottled = _.throttle((event) => {
    const currentResizerPos =
      orientation === Orientation.Horizontal ? event.clientX : event.clientY;

    if (currentResizerPos >= minPx && currentResizerPos <= maxPx) {
      setPx(currentResizerPos);
    }
  }, 16);

  const handleResizeEnd = () => {
    setIsResizing(false);
    document.removeEventListener("mousemove", handleResize);
    document.removeEventListener("mouseup", handleResizeEnd);
  };

  let containerStyles = {
    width:
      orientation === Orientation.Horizontal
        ? !isNaN(currentPx)
          ? `${currentPx}px`
          : `${preLoadPercent}%`
        : undefined,
    height:
      orientation === Orientation.Vertical
        ? !isNaN(currentPx)
          ? `${currentPx}px`
          : `${preLoadPercent}%`
        : undefined,
    flexDirection: orientation === Orientation.Horizontal ? "row" : "column",
  };

  useEffect(() => {
    setPx(initialPx);
  }, [initialPx]);

  return (
    <>
      <div
        ref={containerRef}
        style={containerStyles}
        className={styles.container}
      >
        {children}
      </div>
      <div
        className={`${
          orientation === Orientation.Horizontal
            ? styles.resizer_horizontal
            : styles.resizer_vertical
        } ${
          isResizing && orientation === Orientation.Horizontal
            ? styles.resizer_horizontal_enlarge
            : ""
        } ${
          isResizing && orientation === Orientation.Vertical
            ? styles.resizer_vertical_enlarge
            : ""
        }`}
        onMouseDown={handleResizeStart}
      ></div>
    </>
  );
}
