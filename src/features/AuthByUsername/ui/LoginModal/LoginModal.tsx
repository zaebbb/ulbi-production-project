import React, { Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { Loader } from 'shared/ui/Loader/Loader'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import cls from './LoginModal.module.scss'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal: React.FC<LoginModalProps> = (props) => {
  const {
    className,
    isOpen,
    onClose,
  } = props

  return (
    <Modal
      className={classNames(cls.LoginModal, {}, [className])}
      onClose={onClose}
      isOpen={isOpen}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  )
}
