import React from 'react'
import cls from './Modal.module.scss'
import {
  classNames, type Mods,
} from '@/shared/lib/classNames/classNames'
import { toggleFeatures } from '@/shared/lib/features'
import { useModal } from '@/shared/lib/hooks/useModal/useModal'
import { Overlay } from '@/shared/ui/redesigned/Overlay/Overlay'
import { Portal } from '@/shared/ui/redesigned/Portal/Portal'

interface ModalProps {
  className?: string
  children?: React.ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const ANIMATION_DELAY = 300

export const Modal: React.FC<ModalProps> = (props) => {
  const {
    className,
    children,
    isOpen = false,
    onClose,
    lazy,
  } = props

  const {
    isMounted, isClosing, close,
  } = useModal({
    onClose,
    isOpen,
    animationDelay: ANIMATION_DELAY,
  })

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  }

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal element={document.getElementById('app') ?? document.body}>
      <div
        className={classNames(
          cls.Modal,
          mods,
          [
            className,
            toggleFeatures({
              name: 'isAppRedesigned',
              on: () => cls.modalRedesigned,
              off: () => cls.modalDeprecated,
            }),
          ]
        )}
      >
        <Overlay onClick={close} />
        <div
          className={cls.content}
        >
          {children}
        </div>
      </div>
    </Portal>
  )
}
