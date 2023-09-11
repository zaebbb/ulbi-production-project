import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import { type SidebarItemType } from '../../model/types/sidebar'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import cls from './Sidebar.module.scss'
import { LangSwitcher } from '@/features/LangSwitcher'
import { ThemeSwitcher } from '@/features/ThemeSwicher'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { AppLogo } from '@/shared/ui/AppLogo/AppLogo'
import { Button, SizeButton, ThemeButton } from '@/shared/ui/Button'
import { VStack } from '@/shared/ui/Stack'

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
    <ToggleFeatures
      feature={'isAppRedesigned'}
      off={
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
      }
      on={
        <aside
          data-testid={'sidebar'}
          className={
            classNames(
              cls.SidebarRedesigned,
              { [cls.collapsed]: collapsed },
              [className]
            )}
        >
          <AppLogo className={cls.appLogo} />
        </aside>
      }
    />
  )
})
