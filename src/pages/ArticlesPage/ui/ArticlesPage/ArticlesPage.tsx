import React, { memo } from 'react'
import {
  FetchNextArticlePage,
} from '../../model/services/fetchNextArticlePage/fetchNextArticlePage'
import {
  articlesPageReducer,
} from '../../model/slice/articlePageSlice/articlePageSlice'
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters'
import { ArticleInfinityList } from '../ArticlrInfinityList/ArticleInfinityList'
import cls from './ArticlesPage.module.scss'
import { ArticlePageGreeting } from '@/features/articlePageGreeting'
import { classNames } from '@/shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducerList } from '@/shared/lib/components/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Page } from '@/widgets/Page'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducerList = {
  articlesPage: articlesPageReducer,
}

const ArticlesPage: React.FC<ArticlesPageProps> = (props: ArticlesPageProps) => {
  const { className } = props
  const dispatch = useAppDispatch()

  const onLoadNextPage = React.useCallback(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(FetchNextArticlePage())
    }
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        data-testid={'ArticlesPage'}
        onScrollEnd={onLoadNextPage}
        className={classNames(cls.ArticlesPage, {}, [className])}
      >
        <ArticlePageFilters />
        <ArticleInfinityList />
        <ArticlePageGreeting />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
