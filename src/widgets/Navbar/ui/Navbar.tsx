import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { Modal } from 'shared/ui/Modal/Modal'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface NavbarProps {
  className?: string
}

export const Navbar: React.FC<NavbarProps> = ({
  className,
}) => {
  const [isAuthModal, setIsAuthModal] = React.useState<boolean>(false)
  const { t } = useTranslation()

  const onToggleModal = React.useCallback(() => {
    setIsAuthModal(prev => !prev)
  }, [])

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ThemeButton.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >
        {t('login-account')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>

      </Modal>
    </div>
  )
}
