import React, { type CSSProperties, memo } from 'react'
import cls from './Skeleton.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'

interface SkeletonProps {
  className?: string
  height?: string | number
  width?: string | number
  border?: string
}

/**
 * @deprecated
 * */
export const Skeleton: React.FC<SkeletonProps> = memo((props: SkeletonProps) => {
  const {
    className,
    height,
    width,
    border = '8px',
  } = props

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  }

  return (
    <div
      className={classNames(cls.Skeleton, {}, [className])}
      style={styles}
    />
  )
})
