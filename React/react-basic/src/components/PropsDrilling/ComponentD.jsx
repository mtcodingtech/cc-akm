import React, { useContext } from "react";
import { TitleContext } from "./ComponentA";

function ComponentD() {
  const { title } = useContext(TitleContext);

  return (
    <div>
      <h1>ComponentD</h1>
      <h2>{title}</h2>
    </div>
  );
}

export default ComponentD;
