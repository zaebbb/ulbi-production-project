import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwicher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import AboutIcon from 'shared/assets/icons/about.svg'
import MainIcon from 'shared/assets/icons/main.svg'

interface SidebarProps {
  className?: string
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const [collapsed, setCollapsed] = React.useState<boolean>(false)
  const {
    className = '',
  } = props
  const { t } = useTranslation()

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
        <AppLink
          className={cls.item}
          to={RoutePath.main}
          theme={AppLinkTheme.SECONDARY}
        >
          <MainIcon
            className={cls.icon}
          />
          <span
            className={cls.link}
          >
            {t('nav-main')}
          </span>
        </AppLink>

        <AppLink
          className={cls.item}
          to={RoutePath.about}
          theme={AppLinkTheme.SECONDARY}
        >
          <AboutIcon
            className={cls.icon}
          />
          <span
            className={cls.link}
          >
            {t('nav-about')}
          </span>
        </AppLink>
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
}
