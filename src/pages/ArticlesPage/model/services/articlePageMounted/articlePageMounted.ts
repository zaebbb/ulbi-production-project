import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  getArticlePageMounted,
} from '../../selectors/articlesPageSelectors'
import { articlesPageActions } from '../../slice/articlePageSlice/articlePageSlice'
import { fetchArticles } from '../fetchArticles/fetchArticles'
import { ArticlePageUrlParams } from '../../types/articlesPage'
import { type ArticleSortField, type ArticleType } from '@/entities/Article'
import { type SortOrder } from '@/shared/types'
import { type ThunkConfig } from '@/app/providers/StoreProvider'

interface ArticlePageMountedProps {
  urlSearchParams?: URLSearchParams
}

export const ArticlePageMounted =
  createAsyncThunk<void, ArticlePageMountedProps, ThunkConfig<string>>(
    'articlesPage/ArticlePageMounted',
    async (
      props,
      thunkApi
    ) => {
      const {
        getState,
        dispatch,
      } = thunkApi
      const {
        urlSearchParams,
      } = props

      const _mounted = getArticlePageMounted(getState())

      if (!_mounted) {
        const orderFromUrl = urlSearchParams?.get(ArticlePageUrlParams.ORDER) as SortOrder
        const sortFromUrl = urlSearchParams?.get(ArticlePageUrlParams.SORT) as ArticleSortField
        const searchFromUrl = urlSearchParams?.get(ArticlePageUrlParams.SEARCH)
        const typeFromUrl = urlSearchParams?.get(ArticlePageUrlParams.TYPE) as ArticleType

        if (orderFromUrl) {
          dispatch(articlesPageActions.setOrder(orderFromUrl))
        }

        if (sortFromUrl) {
          dispatch(articlesPageActions.setSort(sortFromUrl))
        }

        if (searchFromUrl) {
          dispatch(articlesPageActions.setSearch(searchFromUrl))
        }

        if (typeFromUrl) {
          dispatch(articlesPageActions.setType(typeFromUrl))
        }

        dispatch(articlesPageActions.initState())
        dispatch(fetchArticles({}))
      }
    }
  )
