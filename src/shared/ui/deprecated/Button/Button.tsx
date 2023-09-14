import React, { type ButtonHTMLAttributes, memo } from 'react'
import cls from './Button.module.scss'
import { type Additional, classNames, type Mods } from '@/shared/lib/classNames/classNames'

export enum ThemeButton {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum SizeButton {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

/**
 * @deprecated
 * */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  /**
   * Тема кнопки. Отвечает за визуал (в рамке, без стилей, противоположный теме приложения цвет и тд)
   */
  theme?: ThemeButton
  /**
   * Флаг, делающий кнопку квадратной
   */
  square?: boolean
  /**
   * Размер кнопки в соответствии с дизайн системой
   */
  size?: SizeButton
  /**
   * Флаг, отвечающий за работу кнопки
   */
  disabled?: boolean
  /**
   * Содержимое кнопки
   */
  children?: React.ReactNode
  /**
   * Увеличивает кнопку на всю свободную ширину
   */
  fullWidth?: boolean
}

/**
 * @deprecated
 * */
export const Button: React.FC<ButtonProps> = memo((props: ButtonProps) => {
  const {
    className,
    children,
    square,
    theme = ThemeButton.CLEAR,
    size = SizeButton.M,
    disabled = false,
    fullWidth = false,
    ...otherProps
  } = props

  const additional: Additional = [
    className,
    cls[theme],
    cls[size],
  ]

  const mods: Mods = {
    [cls.square]: square,
    [cls['full-width']]: fullWidth,
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
