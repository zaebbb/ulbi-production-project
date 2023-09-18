import React, { memo } from 'react'
import cls from './StickyLayout.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'

interface StickyLayoutProps {
  className?: string
  left?: React.ReactElement
  content: React.ReactElement
  right?: React.ReactElement
}

export const StickyLayout: React.FC<StickyLayoutProps> = memo((props: StickyLayoutProps) => {
  const {
    className,
    left,
    content,
    right,
  } = props

  return (
    <div className={classNames(cls.StickyLayout, {}, [className])}>
      {left && <div className={cls.left}>{left}</div>}
      <div className={cls.content}>{content}</div>
      {right && <div className={cls.right}>{right}</div>}
    </div>
  )
})
