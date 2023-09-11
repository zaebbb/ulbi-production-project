import React, { memo } from 'react'
import cls from './AppLogo.module.scss'
import AppSvg from '@/shared/assets/icons/logo.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { HStack } from '@/shared/ui/Stack'

interface AppLogoProps {
  className?: string
}

export const AppLogo: React.FC<AppLogoProps> = memo((props: AppLogoProps) => {
  const { className } = props

  return (
    <HStack
      justify={'center'}
      align={'center'}
      className={classNames(cls.appLogoWrapper, {}, [className])}
    >
      <div className={cls.gradientBig} />
      <div className={cls.gradientSmall} />
      <AppSvg className={cls.appLogo} />
    </HStack>
  )
})
