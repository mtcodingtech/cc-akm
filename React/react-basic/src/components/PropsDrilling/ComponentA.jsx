import React, { createContext, useContext } from "react";
import ComponentB from "./ComponentB";

export const TitleContext = createContext();

function ComponentA() {
  return (
    <div>
      <h1>ComponentA</h1>
      <TitleContext.Provider value={{ title: "Hello" }}>
        <ComponentB />
      </TitleContext.Provider>
    </div>
  );
}

export default ComponentA;
