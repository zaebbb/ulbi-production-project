import React from 'react'
import { Theme } from '@/shared/const'
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage'
import { ThemeContext } from '@/shared/lib/context/ThemeContext'

interface ThemeProviderProps {
  initialTheme?: Theme
  children: React.ReactNode
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const {
    children,
    initialTheme,
  } = props

  const [isThemeInited, setIsThemeInited] = React.useState(false)

  const [
    theme,
    setTheme,
  ] = React.useState<Theme>(initialTheme || fallbackTheme || Theme.BLUE)

  React.useEffect(() => {
    if (!isThemeInited && initialTheme) {
      setTheme(initialTheme)
      setIsThemeInited(true)
    }
  }, [initialTheme, isThemeInited])

  React.useEffect(() => {
    document.body.className = theme
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
  }, [theme])

  React.useEffect(() => {
    if (initialTheme) {
      setTheme(initialTheme)
    }
  }, [initialTheme])

  const defaultProps = React.useMemo(() => ({
    theme,
    setTheme,
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
