import React from 'react'
import {
  classNames, type Mods,
} from 'shared/lib/classNames/classNames'
import { useModal } from 'shared/lib/hooks/useModal/useModal'
import { Overlay } from '../Overlay/Overlay'
import { Portal } from '../Portal/Portal'
import cls from './Modal.module.scss'

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
    <Portal>
      <div
        className={classNames(
          cls.Modal, mods, [className]
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
