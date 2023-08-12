import React, { memo } from 'react'
import cls from './Icon.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'

export type IconColorType = 'fill' | 'stroke'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
  type?: IconColorType
  isInverted?: boolean
}

export const Icon = memo((props: IconProps) => {
  const {
    className,
    Svg,
    type = 'fill',
    isInverted = false,
    ...other
  } = props

  return (
    <Svg
      className={
        classNames(
          cls.Icon, { [cls.fill_inverted]: isInverted }, [className, cls[type]]
        )
      }
      {...other}
    />
  )
})
