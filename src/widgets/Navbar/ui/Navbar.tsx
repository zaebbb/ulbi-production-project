import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

interface NavbarProps {
  className?: string
}

export const Navbar: React.FC<NavbarProps> = memo((props: NavbarProps) => {
  const { className } = props
  const [isAuthModal, setIsAuthModal] = React.useState<boolean>(false)
  const { t } = useTranslation()
  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()

  const onCloseModal = React.useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = React.useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onLogout = React.useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text text={t('logo-text')} theme={TextTheme.PRIMARY_INVERTED} />

        <div className={cls.links}>
          <AppLink
            to={RoutePath.article_create}
            theme={AppLinkTheme.SECONDARY}
          >
            {t('create-article')}
          </AppLink>
          <Button
            theme={ThemeButton.CLEAR_INVERTED}
            onClick={onLogout}
          >
            {t('btn-logout')}
          </Button>
        </div>
      </header>
    )
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ThemeButton.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t('login-account')}
      </Button>
      {isAuthModal && (
        <LoginModal
          isOpen={isAuthModal}
          onClose={onCloseModal}
        />
      )}
    </div>
  )
})
