import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar } from '@/shared/ui/Avatar'
import { Menu } from '@/shared/ui/Popups'
import { getUserAuthData, isAdmin, isManager, userActions } from '@/entities/User'
import { RoutePath } from '@/shared/const'

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

  return (
    <Menu
      className={className}
      items={[
        ...(isAdminPanel ? [{
          content: t('nav-admin'),
          href: RoutePath.admin_panel,
        }] : []),
        {
          content: t('nav-profile'),
          href: RoutePath.profile + authData.id,
        },
        {
          content: t('btn-logout'),
          onClick: onLogout,
        },
      ]}
      trigger={<Avatar size={30} src={authData.avatar} />}
      direction={'bottom-right'}
    />
  )
})
