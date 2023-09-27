import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import cls from './Navbar.module.scss'
import { getUserAuthData } from '@/entities/User'
import { LoginModal } from '@/features/AuthByUsername'
import { AvatarMenu } from '@/features/avatarMenu'
import { NotificationButton } from '@/features/notificationButton'
import { getRouteArticleCreate } from '@/shared/const'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { Button as ButtonDeprecated, ThemeButton } from '@/shared/ui/deprecated/Button'
import { Text, TextTheme } from '@/shared/ui/deprecated/Text'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { Button } from '@/shared/ui/redesigned/Button'
import { HStack } from '@/shared/ui/redesigned/Stack'

interface NavbarProps {
  className?: string
}

export const Navbar: React.FC<NavbarProps> = memo((props: NavbarProps) => {
  const { className } = props
  const [isAuthModal, setIsAuthModal] = React.useState<boolean>(false)
  const { t } = useTranslation()
  const authData = useSelector(getUserAuthData)

  const onCloseModal = React.useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = React.useCallback(() => {
    setIsAuthModal(true)
  }, [])

  if (authData) {
    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        off={
          <header className={classNames(cls.Navbar, {}, [className])}>
            <Text text={t('logo-text')} theme={TextTheme.PRIMARY_INVERTED} />

            <HStack align={'center'} className={cls.links}>
              <AppLink
                to={getRouteArticleCreate()}
                variant={'primary'}
              >
                {t('create-article')}
              </AppLink>
              <HStack gap={16} className={cls.actions} align={'center'}>
                <NotificationButton />
                <AvatarMenu />
              </HStack>

            </HStack>
          </header>
        }
        on={
          <header className={classNames(cls.NavbarRedesigned, {}, [className])}>
            <HStack gap={16} className={cls.actions} align={'center'}>
              <NotificationButton />
              <AvatarMenu />
            </HStack>
          </header>
        }
      />
    )
  }

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      off={
        <header className={classNames(cls.Navbar, {}, [className])}>
          <ButtonDeprecated
            theme={ThemeButton.CLEAR_INVERTED}
            className={cls.links}
            onClick={onShowModal}
          >
            {t('login-account')}
          </ButtonDeprecated>
          {isAuthModal && (
            <LoginModal
              isOpen={isAuthModal}
              onClose={onCloseModal}
            />
          )}
        </header>
      }
      on={
        <header className={classNames(cls.NavbarRedesigned, {}, [className])}>
          <Button
            className={cls.links}
            onClick={onShowModal}
            variant={'clear'}
          >
            {t('login-account')}
          </Button>
          {isAuthModal && (
            <LoginModal
              isOpen={isAuthModal}
              onClose={onCloseModal}
            />
          )}
        </header>
      }
    />
  )
})
