import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwicher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button'
import { SidebarItemsList, type SidebarItemType } from '../../model/types/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'

interface SidebarProps {
  className?: string
}

export const Sidebar: React.FC<SidebarProps> = memo((props: SidebarProps) => {
  const [collapsed, setCollapsed] = React.useState<boolean>(false)
  const {
    className = '',
  } = props

  const onToggle = (): void => {
    setCollapsed(prev => !prev)
  }

  return (
    <div
      data-testid={'sidebar'}
      className={
        classNames(
          cls.Sidebar,
          { [cls.collapsed]: collapsed },
          [className]
        )}
    >
      <Button
        data-testid={'sidebar-toggle'}
        type={'button'}
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        size={SizeButton.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={cls.items}>
        {SidebarItemsList.map((item: SidebarItemType) => (
          <SidebarItem
            key={item.path}
            item={item}
            collapsed={collapsed}
          />
        ))}
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher
          className={cls.lang}
          short={collapsed}
        />
      </div>
    </div>
  )
})
