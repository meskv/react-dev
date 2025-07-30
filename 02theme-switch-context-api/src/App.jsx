import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import Card from "./components/Card";
import ThemeButton from "./components/ThemeButton";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  // Methods are defined here
  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");

  // actual change of theme

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* <p>Theme Button Here</p> */}
            <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* <p>Card Here</p> */}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
