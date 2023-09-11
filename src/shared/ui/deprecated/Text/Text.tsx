import React, { memo } from 'react'
import cls from './Text.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'

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
  'data-testid'?: string
}

type HeaderTagType = 'h1' | 'h2' | 'h3'

const mapSizeToHeader: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1',
}

/**
 * @deprecated
 * */
export const Text: React.FC<TextProps> = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
    'data-testid': testId = '',
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
      {
        title && <HeaderTag
          data-testid={`${testId}-header`}
          className={cls.title}
        >
          {title}
        </HeaderTag>
      }
      {
        text && <p
          data-testid={`${testId}-text`}
          className={cls.text}
        >
          {text}
        </p>}
    </div>
  )
})
