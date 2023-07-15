import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import { ArticleList } from 'entities/Article'
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader'
import {
  articlesPageReducer,
  getArticles,
} from '../../model/slice/articlePageSlice/articlePageSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useSelector } from 'react-redux'
import {
  getArticlePageError,
  getArticlePageIsLoading,
  getArticlePageView,
} from '../../model/selectors/articlesPageSelectors'
import { Page } from 'widgets/Page'
import {
  FetchNextArticlePage,
} from '../../model/services/fetchNextArticlePage/fetchNextArticlePage'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { ArticlePageMounted } from '../../model/services/articlePageMounted/articlePageMounted'
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters'
import { useSearchParams } from 'react-router-dom'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducerList = {
  articlesPage: articlesPageReducer,
}

const ArticlesPage: React.FC<ArticlesPageProps> = (props: ArticlesPageProps) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlePageIsLoading)
  const view = useSelector(getArticlePageView)
  const error = useSelector(getArticlePageError)
  const { t } = useTranslation()
  const [searchParams] = useSearchParams()

  useInitialEffect(() => {
    dispatch(ArticlePageMounted({
      urlSearchParams: searchParams,
    }))
  })

  const onLoadNextPage = React.useCallback(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(FetchNextArticlePage())
    }
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        onScrollEnd={onLoadNextPage}
        className={classNames(cls.ArticlesPage, {}, [className])}
      >
        {
          error && (
            <Text title={t('error-load-article-data')} theme={TextTheme.ERROR} />
          )
        }
        <ArticlePageFilters />
        <ArticleList
          isLoading={isLoading}
          view={view}
          articles={articles}
          className={cls.list}
        />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
