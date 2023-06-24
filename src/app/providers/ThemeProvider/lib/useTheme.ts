import React from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

interface UseThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme (): UseThemeResult {
  const { theme, setTheme } = React.useContext(ThemeContext)

  const toggleTheme = (): void => {
    let newTheme: Theme

    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT
        break
      case Theme.LIGHT:
        newTheme = Theme.BLUE
        break
      case Theme.BLUE:
        newTheme = Theme.DARK
        break
      default:
        newTheme = Theme.LIGHT
    }

    setTheme?.(newTheme)
    document.body.className = newTheme
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return {
    toggleTheme,
    theme: theme || Theme.LIGHT,
  }
}
