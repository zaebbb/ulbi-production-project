import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

interface NavbarProps {
  className?: string
}

export const Navbar: React.FC<NavbarProps> = ({
  className,
}) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          className={cls.mainLink}
          to={'/'}
          theme={AppLinkTheme.SECONDARY}
        >
          main
        </AppLink>
        <AppLink
          to={'/about'}
          theme={AppLinkTheme.SECONDARY}
        >
          about
        </AppLink>
      </div>
    </div>
  )
}
