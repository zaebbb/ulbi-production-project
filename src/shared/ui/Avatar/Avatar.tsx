import React, { type CSSProperties, memo, useMemo } from 'react'
import { AppImage } from '../AppImage'
import { Skeleton } from '../Skeleton'
import cls from './Avatar.module.scss'
import { classNames, type Mods } from '@/shared/lib/classNames/classNames'

export enum AvatarSize {
  MEDIUM = 'medium',
  SMALL = 'small',
  LARGE = 'large'
}

interface AvatarProps {
  className?: string
  src?: string
  alt?: string
  size?: number
  sizeType?: AvatarSize
}

export const Avatar: React.FC<AvatarProps> = memo((props: AvatarProps) => {
  const {
    className,
    src,
    alt = '',
    size,
    sizeType = AvatarSize.MEDIUM,
  } = props

  const styles = useMemo<CSSProperties>(() => ({
    width: size || 0,
    height: size || 0,
  }), [size])

  const mods: Mods = {
    [cls[sizeType]]: sizeType,
  }

  return (
    <AppImage
      src={src}
      alt={alt}
      className={classNames(
        cls.Avatar, mods, [className]
      )}
      style={size ? styles : {}}
      fallback={<Skeleton border={'50%'} />}
    />
  )
})
