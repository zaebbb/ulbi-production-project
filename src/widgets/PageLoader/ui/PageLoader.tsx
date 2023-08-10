import React from 'react'
import cls from './PageLoader.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Loader } from '@/shared/ui/Loader/Loader'

interface PageLoaderProps {
  className?: string
}

export const PageLoader: React.FC<PageLoaderProps> = (props) => {
  const { className } = props

  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Loader />
    </div>
  )
}
