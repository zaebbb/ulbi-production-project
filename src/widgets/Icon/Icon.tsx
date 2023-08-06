import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Icon.module.scss'

export type IconColorType = 'fill' | 'stroke'

interface IconProps {
  className?: string
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
  type?: IconColorType
  isInverted?: boolean
}

export const Icon: React.FC<IconProps> = memo((props: IconProps) => {
  const {
    className,
    Svg,
    type = 'fill',
    isInverted = false,
  } = props

  return (
    <Svg
      className={
        classNames(
          cls.Icon, { [cls.fill_inverted]: isInverted }, [className, cls[type]]
        )
      }
    />
  )
})
