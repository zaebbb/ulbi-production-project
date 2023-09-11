import React, { memo } from 'react'
import { saveJsonSettings } from '@/entities/User'
import ThemeIcon from '@/shared/assets/icons/theme-dark.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { Button, ThemeButton } from '@/shared/ui/Button'
import { Icon } from '@/shared/ui/Icon'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = memo((props: ThemeSwitcherProps) => {
  const { className } = props
  const { toggleTheme } = useTheme()
  const dispatch = useAppDispatch()

  const onToggleTheme = React.useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }))
    })
  }, [dispatch, toggleTheme])

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={onToggleTheme}
      theme={ThemeButton.CLEAR}
    >
      <Icon Svg={ThemeIcon} width={40} height={40} isInverted />
    </Button>
  )
})
