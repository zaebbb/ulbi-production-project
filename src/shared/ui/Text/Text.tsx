import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export enum TextAlign {
  CENTER = 'center',
  RIGHT = 'right',
  LEFT = 'left'
}

export enum TextSize {
  M = 'size_m',
  L = 'size_l'
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  align?: TextAlign
  size?: TextSize
}

export const Text: React.FC<TextProps> = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
  } = props

  return (
    <div
      className={classNames(
        cls.Text,
        {},
        [className, cls[theme], cls[align], cls[size]]
      )}
    >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  )
})
