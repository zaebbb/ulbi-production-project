import React, { type MutableRefObject } from 'react'

interface UseModalProps {
  onClose?: () => void
  isOpen?: boolean
  animationDelay?: number
}

export const useModal = (props: UseModalProps) => {
  const {
    onClose,
    isOpen,
    animationDelay,
  } = props

  const [isClosing, setIsClosing] = React.useState<boolean>(false)
  const [isMounted, setIsMounted] = React.useState<boolean>(false)
  const timerRef = React.useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

  const close = React.useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, animationDelay)
    }
  }, [animationDelay, onClose])

  const onKeyDown = React.useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      close()
    }
  }, [close])

  React.useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  React.useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  return {
    close,
    isClosing,
    isMounted,
  }
}
