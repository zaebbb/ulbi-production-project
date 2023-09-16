import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import {
  getArticlePageError,
  getArticlePageIsLoading,
  getArticlePageView,
} from '../../model/selectors/articlesPageSelectors'
import { ArticlePageMounted } from '../../model/services/articlePageMounted/articlePageMounted'
import { getArticles } from '../../model/slice/articlePageSlice/articlePageSlice'
import cls from './ArticleInfinityList.module.scss'
import { ArticleList } from '@/entities/Article'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Text, TextTheme } from '@/shared/ui/deprecated/Text'

interface ArticleInfinityListProps {
  className?: string
}

export const ArticleInfinityList: React.FC<ArticleInfinityListProps> =
  memo((props: ArticleInfinityListProps) => {
    const { className } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlePageIsLoading)
    const view = useSelector(getArticlePageView)
    const [searchParams] = useSearchParams()
    const error = useSelector(getArticlePageError)

    useInitialEffect(() => {
      dispatch(ArticlePageMounted({
        urlSearchParams: searchParams,
      }))
    })

    return (
      <div className={classNames(cls.ArticleInfinityList, {}, [className])}>
        {
          error && (
            <Text title={t('error-load-article-data')} theme={TextTheme.ERROR} />
          )
        }
        <ArticleList
          isLoading={isLoading}
          view={view}
          articles={articles}
          className={cls.list}
        />
      </div>
    )
  })
