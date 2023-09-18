import React, { type HTMLAttributes, memo, type ReactNode } from 'react'
import cls from './Card.module.scss'
import { type Additional, classNames, type Mods } from '@/shared/lib/classNames/classNames'

export type CardVariant = 'normal' | 'outlined' | 'light'

export type CardPadding = '0' | '8' | '16' | '24'
export type CardBorderRadius = 'round' | 'normal'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
  variant?: CardVariant
  isMax?: boolean
  padding?: CardPadding
  borderRadius?: CardBorderRadius
}

const mapPaddingToClass: Record<CardPadding, string> = {
  0: 'gap_0',
  8: 'gap_8',
  16: 'gap_16',
  24: 'gap_24',
}

const mapBorderRadiusToClass: Record<CardBorderRadius, string> = {
  round: 'radius_round',
  normal: 'radius_normal',
}

export const Card: React.FC<CardProps> = memo((props: CardProps) => {
  const {
    className,
    children,
    variant = 'normal',
    isMax = false,
    padding = '8',
    borderRadius = 'normal',
    ...otherProps
  } = props

  const mods: Mods = {
    [cls.max]: isMax,
  }

  const additional: Additional = [
    className,
    cls[variant],
    cls[mapPaddingToClass[padding]],
    cls[mapBorderRadiusToClass[borderRadius]],
  ]

  return (
    <div
      className={classNames(cls.Card, mods, additional)}
      {...otherProps}
    >
      {children}
    </div>
  )
})
