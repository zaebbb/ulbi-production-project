import React, { type ButtonHTMLAttributes } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum SizeButton {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
  square?: boolean
  size?: SizeButton
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    square,
    theme = ThemeButton.CLEAR,
    size,
    ...otherProps
  } = props

  const additional = [
    className,
    cls[theme],
    cls[size],
  ]

  const mods: Record<string, boolean> = {
    [cls.square]: square,
  }

  return (
    <button
      type={'button'}
      className={classNames(cls.Button, mods, additional)}
      {...otherProps}
    >
      {children}
    </button>
  )
}
