import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
  getArticlePageOrder,
  getArticlePageSearch,
  getArticlePageSort,
  getArticlePageType,
  getArticlePageView,
} from '../../model/selectors/articlesPageSelectors'
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles'
import { articlesPageActions } from '../../model/slice/articlePageSlice/articlePageSlice'
import cls from './ArticlePageFilters.module.scss'
import {
  type ArticleSortField,
  type ArticleView,
  type ArticleType,
} from '@/entities/Article'
import { ArticleSortSelector } from '@/features/ArticleSortSelector'
import { ArticleTabs } from '@/features/ArticleTypeTabs'
import { ArticleViewSelector } from '@/features/ArticleViewSelector'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'
import { type SortOrder } from '@/shared/types/sort'
import { Input } from '@/shared/ui/Input'
import { type TabItem } from '@/shared/ui/Tabs'

interface ArticlePageFiltersProps {
  className?: string
}

export const ArticlePageFilters: React.FC<ArticlePageFiltersProps> =
  memo((props: ArticlePageFiltersProps) => {
    const { className } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const view = useSelector(getArticlePageView)
    const sort = useSelector(getArticlePageSort)
    const order = useSelector(getArticlePageOrder)
    const search = useSelector(getArticlePageSearch)
    const type = useSelector(getArticlePageType)

    const fetchData = React.useCallback(() => {
      dispatch(articlesPageActions.setPage(1))
      dispatch(fetchArticles({
        replace: true,
      }))
    }, [dispatch])

    const debounceFetchData = useDebounce(fetchData, 500)

    const onChangeView = React.useCallback((view: ArticleView) => {
      dispatch(articlesPageActions.setView(view))
      fetchData()
    }, [dispatch, fetchData])

    const onChangeSort = React.useCallback((newSort: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(newSort))
      fetchData()
    }, [dispatch, fetchData])

    const onChangeOrder = React.useCallback((newOrder: SortOrder) => {
      dispatch(articlesPageActions.setOrder(newOrder))
      fetchData()
    }, [dispatch, fetchData])

    const onChangeSearch = React.useCallback((value: string) => {
      dispatch(articlesPageActions.setSearch(value))
      debounceFetchData()
    }, [debounceFetchData, dispatch])

    const onChangeType = React.useCallback((tab: TabItem) => {
      dispatch(articlesPageActions.setType(tab.value as ArticleType))
      fetchData()
    }, [dispatch, fetchData])

    return (
      <div className={classNames(cls.ArticlePageFilters, {}, [className])}>
        <div className={cls.sortWrapper}>
          <ArticleSortSelector
            onChangeOrder={onChangeOrder}
            onChangeSort={onChangeSort}
            sort={sort}
            order={order}
          />
          <ArticleViewSelector
            view={view}
            onViewClick={onChangeView}
          />
        </div>
        <Input
          placeholder={t('article-search')}
          value={search}
          onChange={onChangeSearch}
        />
        <ArticleTabs
          className={cls.types}
          type={type}
          onChangeType={onChangeType}
        />
      </div>
    )
  })
