import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { type SidebarItemType } from '../../model/types/sidebar'
import cls from './SidebarItem.module.scss'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink'
import { classNames } from '@/shared/lib/classNames/classNames'
import { getUserAuthData } from '@/entities/User'

interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem: React.FC<SidebarItemProps> = memo((props: SidebarItemProps) => {
  const {
    item,
    collapsed,
  } = props
  const { t } = useTranslation()
  const isAuth = useSelector(getUserAuthData)

  if (item.authOnly && !isAuth) {
    return null
  }

  return (
    <AppLink
      className={classNames(cls.item, { [cls.collapsed]: collapsed })}
      to={item.path}
      theme={AppLinkTheme.SECONDARY}
    >
      <item.Icon
        className={cls.icon}
      />
      <span
        className={cls.link}
      >
        {t(item.text)}
      </span>
    </AppLink>
  )
})
