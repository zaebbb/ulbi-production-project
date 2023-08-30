import React from 'react'
import cls from './Flex.module.scss'
import { type Additional, classNames } from '@/shared/lib/classNames/classNames'

export type FlexJustify =
  'center' | 'space-between' | 'space-around' | 'space-evenly' |
  'start' | 'end' | 'flex-start' | 'flex-end' |
  'normal' | 'stretch'

export type FlexAlign =
  'center' | 'normal' | 'stretch' |
  'start' | 'end' | 'flex-start' | 'flex-end' |
  'self-start' | 'self-end' | 'baseline'

export type FlexWrap =
  'nowrap' | 'wrap' | 'wrap-reverse'

export type FlexDirection =
  'row' | 'row-reverse' | 'column' | 'column-reverse'

export type FlexGap =
  4 | 8 | 16 | 32 | 64

type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export interface FlexProps extends DivProps {
  className?: string
  children: React.ReactNode
  justify?: FlexJustify
  align?: FlexAlign
  wrap?: FlexWrap
  direction: FlexDirection
  gap?: FlexGap
}

export const Flex: React.FC<FlexProps> = (props: FlexProps) => {
  const {
    className,
    children,
    justify = 'normal',
    align = 'normal',
    wrap = 'nowrap',
    direction = 'row',
    gap = 32,
    ...otherProps
  } = props

  const additional: Additional = [
    className,
    cls[`justify-${justify}`],
    cls[`align-${align}`],
    cls[`wrap-${wrap}`],
    cls[`direction-${direction}`],
    cls[`gap-${gap}`],
  ]

  return (
    <div className={classNames(cls.Flex, {}, additional)} {...otherProps}>
      {children}
    </div>
  )
}
