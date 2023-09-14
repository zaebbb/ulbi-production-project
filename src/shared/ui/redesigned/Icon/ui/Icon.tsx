import React, { memo } from 'react'
import cls from './Icon.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'

export type IconColorType = 'fill' | 'stroke'

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>

interface IconBaseProps extends SvgProps {
  className?: string
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
  type?: IconColorType
  size?: number
}

interface NonClickableIconProps extends IconBaseProps {
  clickable?: false
}

interface ClickableIconProps extends IconBaseProps {
  clickable: true
  onClick: () => void
}

type IconProps = NonClickableIconProps | ClickableIconProps

export const Icon = memo((props: IconProps) => {
  const {
    className,
    Svg,
    type = 'fill',
    width = 32,
    height = 32,
    clickable,
    ...other
  } = props

  const icon = (
    <Svg
      className={
        classNames(
          cls.Icon, {}, [className, cls[type]]
        )
      }
      width={width}
      height={height}
      {...other}
      onClick={undefined}
    />
  )

  if (clickable) {
    return (
      <button
        className={cls.button}
        onClick={props.onClick}
        type={'button'}
        style={{ width, height }}
      >
        {icon}
      </button>
    )
  }

  return icon
})
