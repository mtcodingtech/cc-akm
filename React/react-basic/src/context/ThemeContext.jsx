import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [lightTheme, setLightTheme] = useState({
    syntax: "#555",
    ui: "#ddd",
    bg: "#eee",
  });

  const [darkTheme, setDarkTheme] = useState({
    syntax: "#ddd",
    ui: "#333",
    bg: "#555",
  });

  const theme = isLightTheme ? lightTheme : darkTheme;
  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export default ThemeContextProvider;
