import React, { type ButtonHTMLAttributes, memo } from 'react'
import { type Additional, classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
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
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = memo((props: ButtonProps) => {
  const {
    className,
    children,
    square,
    theme = ThemeButton.CLEAR,
    size = SizeButton.M,
    disabled = false,
    ...otherProps
  } = props

  const additional: Additional = [
    className,
    cls[theme],
    cls[size],
  ]

  const mods: Mods = {
    [cls.square]: square,
  }

  return (
    <button
      type={'button'}
      className={classNames(cls.Button, mods, additional)}
      {...otherProps}
      disabled={disabled}
    >
      {children}
    </button>
  )
})
