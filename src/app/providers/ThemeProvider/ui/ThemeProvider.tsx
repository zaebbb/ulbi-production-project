import React from 'react'
import { useJsonSettings } from '@/entities/User'
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
  const {
    theme: defaultTheme,
  } = useJsonSettings()

  const [isThemeInited, setIsThemeInited] = React.useState(false)

  const [
    theme,
    setTheme,
  ] = React.useState<Theme>(initialTheme || fallbackTheme || Theme.BLUE)

  React.useEffect(() => {
    if (!isThemeInited && defaultTheme) {
      setTheme(defaultTheme)
      setIsThemeInited(true)
    }
  }, [defaultTheme, isThemeInited])

  React.useEffect(() => {
    document.body.className = theme
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
  }, [theme])

  React.useEffect(() => {
    if (defaultTheme) {
      setTheme(defaultTheme)
    }
  }, [defaultTheme])

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
