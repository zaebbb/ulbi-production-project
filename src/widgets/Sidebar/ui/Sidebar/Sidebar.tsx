import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwicher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { VStack } from 'shared/ui/Stack/VStack/VStack'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import { type SidebarItemType } from '../../model/types/sidebar'
import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar: React.FC<SidebarProps> = memo((props: SidebarProps) => {
  const [collapsed, setCollapsed] = React.useState<boolean>(false)
  const {
    className = '',
  } = props
  const sidebarItems = useSelector(getSidebarItems)

  const onToggle = (): void => {
    setCollapsed(prev => !prev)
  }

  return (
    <aside
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

      <VStack className={cls.items} gap={8} role={'navigation'}>
        {sidebarItems.map((item: SidebarItemType) => (
          <SidebarItem
            key={item.path}
            item={item}
            collapsed={collapsed}
          />
        ))}
      </VStack>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher
          className={cls.lang}
          short={collapsed}
        />
      </div>
    </aside>
  )
})
