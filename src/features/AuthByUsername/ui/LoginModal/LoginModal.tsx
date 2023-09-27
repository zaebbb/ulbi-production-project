import React, { Suspense } from 'react'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { Loader } from '@/shared/ui/Loader'
import { Modal as ModalDeprecated } from '@/shared/ui/deprecated/Modal'
import { Modal } from '@/shared/ui/redesigned/Modal'

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
    <ToggleFeatures
      feature={'isAppRedesigned'}
      off={
        <ModalDeprecated
          className={classNames('', {}, [className])}
          onClose={onClose}
          isOpen={isOpen}
          lazy
        >
          <Suspense fallback={<Loader />}>
            <LoginFormAsync onSuccess={onClose} />
          </Suspense>
        </ModalDeprecated>
      }
      on={
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
      }
    />
  )
}
