import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import { type SidebarItemType } from '../../model/types/sidebar'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import cls from './Sidebar.module.scss'
import { LangSwitcher } from '@/features/LangSwitcher'
import { ThemeSwitcher } from '@/features/ThemeSwicher'
import ArrowSidebar from '@/shared/assets/icons/redesigned/ArrowSidebar.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { Button as ButtonDeprecated, SizeButton, ThemeButton } from '@/shared/ui/deprecated/Button'
import { AppLogo } from '@/shared/ui/redesigned/AppLogo/AppLogo'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { VStack } from '@/shared/ui/redesigned/Stack'

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
    console.log(collapsed)
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
          <ButtonDeprecated
            data-testid={'sidebar-toggle'}
            type={'button'}
            onClick={onToggle}
            className={cls.collapseBtn}
            theme={ThemeButton.BACKGROUND_INVERTED}
            size={SizeButton.L}
            square
          >
            {collapsed ? '>' : '<'}
          </ButtonDeprecated>

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
              { [cls.collapsedRedesigned]: collapsed },
              [className]
            )}
        >
          <AppLogo size={!collapsed ? 50 : 30} className={cls.appLogo} />

          <Icon
            clickable
            data-testid={'sidebar-toggle'}
            onClick={onToggle}
            className={cls.collapseBtn}
            Svg={ArrowSidebar}
            width={12}
            height={12}
          />

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
    />
  )
})
