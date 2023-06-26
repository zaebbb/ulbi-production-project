import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage: React.FC<ArticleDetailsPageProps> = (props: ArticleDetailsPageProps) => {
  const { className } = props

  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      ARTICLES detail PAGE
    </div>
  )
}

export default memo(ArticleDetailsPage)
