import React, { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import LightIcon from '@/shared/assets/icons/theme-light.svg'
import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import { Button, ThemeButton } from '@/shared/ui/Button/Button'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { Theme } from '@/shared/const'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = memo((props: ThemeSwitcherProps) => {
  const { className } = props
  const { toggleTheme, theme } = useTheme()

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}

    >
      {
        theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />
      }
    </Button>
  )
})
