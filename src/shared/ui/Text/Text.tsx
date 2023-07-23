import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export enum TextTheme {
  PRIMARY = 'primary',
  PRIMARY_INVERTED = 'primary_inverted',
  ERROR = 'error'
}

export enum TextAlign {
  CENTER = 'center',
  RIGHT = 'right',
  LEFT = 'left'
}

export enum TextSize {
  S = 'size_s',
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

type HeaderTagType = 'h1' | 'h2' | 'h3'

const mapSizeToHeader: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1',
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

  const HeaderTag = mapSizeToHeader[size]

  return (
    <div
      className={classNames(
        cls.Text,
        {},
        [className, cls[theme], cls[align], cls[size]]
      )}
    >
      {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  )
})
