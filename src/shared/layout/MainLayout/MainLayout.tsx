import React, { memo } from 'react'
import cls from './MainLayout.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'

interface MainLayoutProps {
  className?: string
  header?: React.ReactElement
  content?: React.ReactElement
  sidebar?: React.ReactElement
  toolbar?: React.ReactElement
}

export const MainLayout: React.FC<MainLayoutProps> = memo((props: MainLayoutProps) => {
  const {
    className,
    header,
    content,
    sidebar,
    toolbar,
  } = props

  return (
    <div className={classNames(cls.MainLayout, {}, [className])}>
      <div className={cls.SidebarLayout}>
        {sidebar}
      </div>
      <div className={cls.ContentLayout}>
        {content}
      </div>
      <div className={cls.RightbarLayout}>
        <div className={cls.HeaderLayout}>{header}</div>
        <div className={cls.ToolbarLayout}>{toolbar}</div>
      </div>
    </div>
  )
})
