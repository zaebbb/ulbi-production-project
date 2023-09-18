import React from 'react'
import { useSelector } from 'react-redux'
import { type TabItem } from 'src/shared/ui/redesigned/Tabs'
import {
  getArticlePageOrder,
  getArticlePageSearch,
  getArticlePageSort, getArticlePageType,
} from '../../model/selectors/articlesPageSelectors'
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles'
import { articlesPageActions } from '../../model/slice/articlePageSlice/articlePageSlice'
import { type ArticleSortField, type ArticleType } from '@/entities/Article'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'
import { type SortOrder } from '@/shared/types/sort'

export const useArticleFilters = () => {
  const dispatch = useAppDispatch()
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

  return {
    sort,
    order,
    onChangeSort,
    onChangeOrder,
    type,
    onChangeType,
    search,
    onChangeSearch,
  }
}
