import React, { useEffect, useState } from "react";

function SimpleUseEffect() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    // setTimeout(() => {
    //   setCount((prev) => prev + 1);
    // }, 1000);
  }, [count]);
  

  return (
    <>
      <h1>Rendered: {count}</h1>
    </>
  );
}

export default SimpleUseEffect;
