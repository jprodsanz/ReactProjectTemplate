import React, { useMemo, useState } from "react";
const faces = ["heads", "tails"];

export default function App() {
  const [selectedFace, setSelectedFace] = useState("");
  const [coinFlipResult, setCoinFlipResult] = useState("");
  const flip = () => {
    let index;
    if (Math.random() < 0.5) {
      index = 0;
    } else {
      index = 1;
    }
    setCoinFlipResult(faces[index]);
  };
  const computerSelectedFace = useMemo(() => {
    const face = faces.find((f) => f !== selectedFace);
    return face;
  }, [selectedFace]);
  const isWin = useMemo(() => {
    return coinFlipResult === selectedFace;
  }, [coinFlipResult, selectedFace]);
  const showResult = () => {
    if (isWin) {
      return <p>you win</p>;
    }
    return <p>you lost</p>;
  };
  return (
    <div className="text-center">
      <div>
        <h1>Heads or tails? </h1>
        <button className="landingbutton" onClick={() => setSelectedFace("heads")}>heads</button>
        <button className="landingbutton" onClick={() => setSelectedFace("tails")}>tails</button>
      </div>
      <p>you selected: {selectedFace}</p>
      <p>computer selected: {computerSelectedFace}</p>
      <button className="landingbutton" variant="primary" onClick={flip}>flip coin</button>
      {showResult()}
    </div>
  );
}