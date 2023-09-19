import React, { type ButtonHTMLAttributes, memo } from 'react'
import cls from './Button.module.scss'
import { type Additional, classNames, type Mods } from '@/shared/lib/classNames/classNames'

export type VariantButton = 'clear' | 'outline' | 'filled'

export type SizeButton = 'm' | 'l' | 'xl'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  /**
   * Тема кнопки. Отвечает за визуал (в рамке, без стилей, противоположный теме приложения цвет и тд)
   */
  variant?: VariantButton
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
  addonLeft?: React.ReactNode
  addonRight?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = memo((props: ButtonProps) => {
  const {
    className,
    children,
    square,
    variant = 'outline',
    size = 'm',
    disabled = false,
    fullWidth = false,
    addonLeft,
    addonRight,
    ...otherProps
  } = props

  const additional: Additional = [
    className,
    cls[variant],
    cls[size],
  ]

  const mods: Mods = {
    [cls.square]: square,
    [cls['full-width']]: fullWidth,
    [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
  }

  return (
    <button
      type={'button'}
      className={classNames(cls.Button, mods, additional)}
      {...otherProps}
      disabled={disabled}
    >
      <div className={cls.addonLeft}>{addonLeft}</div>
      {children}
      <div className={cls.addonRight}>{addonRight}</div>
    </button>
  )
})