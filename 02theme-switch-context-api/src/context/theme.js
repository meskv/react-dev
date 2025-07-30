import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light", // default theme
  darkTheme: () => {}, // function to toggle to dark theme
  lightTheme: () => {}, // function to toggle to light theme
}); // initial value

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
