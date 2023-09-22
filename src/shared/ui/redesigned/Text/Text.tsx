import React, { memo } from 'react'
import cls from './Text.module.scss'
import { classNames, type Mods } from '@/shared/lib/classNames/classNames'

export type TextVariant = 'primary' | 'error' | 'accept'

export type TextAlign = 'center' | 'right' | 'left'

export type TextSize = 's' | 'm' | 'l'

interface TextProps {
  className?: string
  title?: string
  text?: string
  variant?: TextVariant
  align?: TextAlign
  size?: TextSize
  isBold?: boolean
  'data-testid'?: string
}

type HeaderTagType = 'h1' | 'h2' | 'h3'

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  s: 'h3',
  m: 'h2',
  l: 'h1',
}

export const Text: React.FC<TextProps> = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    variant = 'primary',
    align = 'left',
    size = 'm',
    isBold = false,
    'data-testid': testId = '',
  } = props

  const HeaderTag = mapSizeToHeaderTag[size]

  const mods: Mods = {
    [cls.bold]: isBold,
  }

  return (
    <div
      className={classNames(
        cls.Text,
        mods,
        [className, cls[variant], cls[align], cls[size]]
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
