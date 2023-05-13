import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwicher'
import { LangSwitcher } from 'widgets/LangSwitcher'

interface SidebarProps {
  className?: string
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const [collapsed, setCollapsed] = React.useState<boolean>(false)
  const {
    className = ''
  } = props

  const onToggle = (): void => {
    setCollapsed(prev => !prev)
  }

  return (
    <div
      className={
        classNames(
          cls.Sidebar,
          { [cls.collapsed]: collapsed },
          [className]
        )}
    >
      <button type={'button'} onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  )
}
