import React, { memo } from 'react'
import { type LinkProps, NavLink } from 'react-router-dom'
import cls from './AppLink.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'

export type AppLinkVariant = 'primary' | 'red'

interface AppLinkProps extends LinkProps {
  className?: string
  variant?: AppLinkVariant
  activeClassName?: string
}

export const AppLink: React.FC<AppLinkProps> = memo((props: AppLinkProps) => {
  const {
    children,
    className,
    to,
    variant = 'primary',
    activeClassName = '',
    ...otherProps
  } = props

  return (
    <NavLink
      to={to}
      className={
        ({ isActive }) => classNames(
          cls.AppLink, { [activeClassName]: isActive }, [className, cls[variant]]
        )
      }
      {...otherProps}
    >
      {children}
    </NavLink>
  )
})
