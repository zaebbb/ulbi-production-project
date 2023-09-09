import React from 'react'
import { useJsonSettings } from '@/entities/User'
import { Theme } from '@/shared/const'
import { ThemeContext } from '@/shared/lib/context/ThemeContext'

interface ThemeProviderProps {
  initialTheme?: Theme
  children: React.ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const {
    children,
    initialTheme,
  } = props
  const {
    theme: defaultTheme = Theme.BLUE,
  } = useJsonSettings()

  console.log(defaultTheme)
  console.log(initialTheme)

  const [isThemeInited, setIsThemeInited] = React.useState(false)

  const [theme, setTheme] = React.useState<Theme>(initialTheme || defaultTheme)

  React.useEffect(() => {
    if (!isThemeInited && defaultTheme) {
      setTheme(defaultTheme)
      setIsThemeInited(true)
    }
  }, [defaultTheme, isThemeInited])

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
