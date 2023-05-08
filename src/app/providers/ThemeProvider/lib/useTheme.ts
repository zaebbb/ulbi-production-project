import React from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}



export function useTheme(): UseThemeResult {
  const {theme, setTheme} = React.useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return {
    toggleTheme,
    theme
  }
}

// 2 разных файла с переменными темами
// файл с общим переменными