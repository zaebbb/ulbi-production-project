import React, { type HTMLAttributeAnchorTarget, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { type Article, ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItem.skeleton'
import cls from './ArticleList.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { Text } from '@/shared/ui/deprecated/Text'
import { HStack } from '@/shared/ui/redesigned/Stack'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
}

const getSkeleton = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 9 : 3).fill(0).map((_, i) => (
    <ArticleListItemSkeleton
      className={cls.card}
      view={view}
      key={i}
    />
  ))
}

export const ArticleList: React.FC<ArticleListProps> = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL,
    target,
  } = props
  const { t } = useTranslation()

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text text={t('articles-not-found')} />
      </div>
    )
  }

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      off={
        <div
          className={
            classNames(cls.ArticleList, {}, [className, cls[view]])
          }
          data-testid={'ArticleList'}
        >
          { articles.map(article => (
            <ArticleListItem
              article={article}
              view={view}
              target={target}
              key={article.id}
              className={cls.card}
            />
          )) }

          {
            isLoading && getSkeleton(view)
          }
        </div>
      }
      on={
        <HStack
          wrap={'wrap'}
          gap={16}
          className={classNames(cls.ArticleListRedesigned, {}, [className])}
          data-testid={'ArticleList'}
        >
          { articles.map(article => (
            <ArticleListItem
              article={article}
              view={view}
              target={target}
              key={article.id}
              className={cls.card}
            />
          )) }

          {
            isLoading && getSkeleton(view)
          }
        </HStack>
      }
    />
  )
})
