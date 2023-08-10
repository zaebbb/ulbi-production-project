import React from 'react'
import cls from './Loader.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'

interface LoaderProps {
  className?: string
}

export const Loader: React.FC<LoaderProps> = (props) => {
  const { className } = props

  return (
    <div className={classNames(cls['lds-ring'], {}, [className])}>
      <div className={cls.lds} />
      <div className={cls.lds} />
      <div className={cls.lds} />
      <div className={cls.lds} />
    </div>
  )
}
