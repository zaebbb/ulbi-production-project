import React from 'react'
import { type Theme } from '@/shared/const'

export interface ThemeContextProps {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = React.createContext<ThemeContextProps>({})
