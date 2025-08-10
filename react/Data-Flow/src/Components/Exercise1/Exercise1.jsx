import { useState } from "react";
import "./Exercise1.css";

export default function Exercise1() {
  const [state, setState] = useState({
    images: [
      "https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*",
      "https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*",
      "https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*",
    ],
    currentImg: 0
  });

  const shiftImageBack = () => {
    setState((prev) => ({
      ...prev,
      currentImg:
        prev.currentImg === 0
          ? prev.images.length - 1
          : prev.currentImg - 1
    }));
  };

  const shiftImageForward = () => {
    setState((prev) => ({
      ...prev,
      currentImg:
        prev.currentImg === prev.images.length - 1
          ? 0
          : prev.currentImg + 1
    }));
  };

  return (
    <div className="gallery-container">
      <button className="back" onClick={shiftImageBack}>
        Back
      </button>
      <img
        src={state.images[state.currentImg]}
        alt="Fruit"
        className="gallery-image"
      />
      <button className="forward" onClick={shiftImageForward}>
        Forward
      </button>
    </div>
  );
}