import React from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { Theme } from '@/shared/const'

interface UseThemeResult {
  toggleTheme: (saveAction?: (theme: Theme) => void) => void
  theme: Theme
}

export function useTheme (): UseThemeResult {
  const { theme, setTheme } = React.useContext(ThemeContext)

  const toggleTheme = (saveAction?: (theme: Theme) => void) => {
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
    saveAction?.(newTheme)
  }

  return {
    toggleTheme,
    theme: theme || Theme.LIGHT,
  }
}
