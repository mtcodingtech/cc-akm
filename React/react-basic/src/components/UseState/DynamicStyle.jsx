import React, { useState } from "react";

function DynamicStyle() {
  const [color, setColor] = useState("");
  const [round, setRound] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Enter your color"
        onChange={(e) => setColor(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Enter your rounded unit"
        onChange={(e) => setRound(e.target.value)}
      />
      <h2
        style={{
          background: color,
          borderRadius: round,
          padding: 20,
          border: "2px solid #fff",
        }}
      >
        Hello
      </h2>
    </>
  );
}

export default DynamicStyle;
