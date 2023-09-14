import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { type SidebarItemType } from '../../model/types/sidebar'
import cls from './SidebarItem.module.scss'
import { getUserAuthData } from '@/entities/User'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { AppLink as AppLinkDeprecated, AppLinkTheme } from '@/shared/ui/deprecated/AppLink'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { Icon } from '@/shared/ui/redesigned/Icon'

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
    <ToggleFeatures
      feature={'isAppRedesigned'}
      off={
        <AppLinkDeprecated
          className={classNames(cls.item, { [cls.collapsed]: collapsed })}
          to={item.path}
          theme={AppLinkTheme.PRIMARY}
        >
          <item.Icon
            className={cls.icon}
          />
          <span
            className={cls.link}
          >
            {t(item.text)}
          </span>
        </AppLinkDeprecated>
      }
      on={
        <AppLink
          className={classNames(cls.itemRedesigned, { [cls.collapsedRedesigned]: collapsed })}
          to={item.path}
          variant={'primary'}
          activeClassName={cls.active}
        >
          <Icon Svg={item.Icon} />
          <span
            className={cls.link}
          >
            {t(item.text)}
          </span>
        </AppLink>
      }
    />

  )
})
