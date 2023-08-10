import React, { memo } from 'react'
import { ArticleInfinityList } from '../ArticlrInfinityList/ArticleInfinityList'
import {
  FetchNextArticlePage,
} from '../../model/services/fetchNextArticlePage/fetchNextArticlePage'
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters'
import {
  articlesPageReducer,
} from '../../model/slice/articlePageSlice/articlePageSlice'
import cls from './ArticlesPage.module.scss'
import { Page } from '@/widgets/Page'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { DynamicModuleLoader, type ReducerList } from '@/shared/lib/components/DynamicModuleLoader'
import { classNames } from '@/shared/lib/classNames/classNames'

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
        onScrollEnd={onLoadNextPage}
        className={classNames(cls.ArticlesPage, {}, [className])}
      >
        <ArticlePageFilters />
        <ArticleInfinityList />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
