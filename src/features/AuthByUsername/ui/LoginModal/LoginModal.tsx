import React, { Suspense } from 'react'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Modal } from '@/shared/ui/Modal'
import { Loader } from '@/shared/ui/Loader'

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
      className={classNames('', {}, [className])}
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
