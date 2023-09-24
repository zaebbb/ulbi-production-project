import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, isAdmin, isManager, userActions } from '@/entities/User'
import { getRouteAdminPanel, getRouteProfile, getRouteSettings } from '@/shared/const'
import { ToggleFeatures } from '@/shared/lib/features'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar'
import { Menu as MenuDeprecated } from '@/shared/ui/deprecated/Popups'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Menu } from '@/shared/ui/redesigned/Popups'

interface AvatarMenuProps {
  className?: string
}

export const AvatarMenu: React.FC<AvatarMenuProps> = memo((props: AvatarMenuProps) => {
  const { className } = props
  const { t } = useTranslation()
  const isAccessAdmin = useSelector(isAdmin)
  const isAccessManager = useSelector(isManager)
  const isAdminPanel = isAccessAdmin || isAccessManager
  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()

  const onLogout = React.useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (!authData) {
    return null
  }

  const items = [
    ...(isAdminPanel ? [{
      content: t('nav-admin'),
      href: getRouteAdminPanel(),
    }] : []),
    {
      content: t('nav-profile'),
      href: getRouteProfile(authData.id),
    },
    {
      content: t('nav-settings'),
      href: getRouteSettings(),
    },
    {
      content: t('btn-logout'),
      onClick: onLogout,
    },
  ]

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      off={
        <MenuDeprecated
          className={className}
          items={items}
          trigger={<AvatarDeprecated size={30} src={authData.avatar} />}
          direction={'bottom-right'}
        />
      }
      on={<Menu
        className={className}
        items={items}
        trigger={<Avatar size={48} src={authData.avatar} />}
        direction={'bottom-right'}
      />}
    />

  )
})
