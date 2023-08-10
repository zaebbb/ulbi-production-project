import React, { memo } from 'react'
import cls from './Overlay.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'

interface OverlayProps {
  className?: string
  onClick?: () => void
}

export const Overlay: React.FC<OverlayProps> = memo((props: OverlayProps) => {
  const { className, onClick } = props

  return (
    <div onClick={onClick} className={classNames(cls.Overlay, {}, [className])} />
  )
})
