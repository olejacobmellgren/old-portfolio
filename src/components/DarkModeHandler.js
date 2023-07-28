import React, { useEffect, useState } from "react";

const DarkModeHandler = ({children}) => {

  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "dark");

  // Use Tailwind to enable darkmode for parents html-elements on first render or when darkMode is changed
  useEffect(() => {
    const html = document.documentElement;

    if (darkMode){
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  const newDarkMode = (updatedDarkMode) => {
    if (updatedDarkMode) {
      localStorage.setItem("darkMode", "dark");
    } else {
      localStorage.removeItem("darkMode");
    }
    setDarkMode(updatedDarkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode: newDarkMode }}>
      { children }
    </DarkModeContext.Provider>
  );
};

export const DarkModeContext = React.createContext({
  darkMode: false,
  setDarkMode: (() => {
    throw new Error("No DarkModeContext");
  }),
});

export default DarkModeHandler;