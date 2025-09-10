import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/themeSlice";

function SwitchTheme() {
  const dispatch = useDispatch();
  const { theme, books } = useSelector((state) => state);
  const lightTheme = theme === "light";
  console.log("switch", books)
  return (
    <div>
      <h1>{lightTheme ? "Light Mode" : "Dark Mode"}</h1>
      <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
    </div>
  );
}

export default SwitchTheme;
