import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { getArticlePageView } from '../../model/selectors/articlesPageSelectors'
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles'
import { articlesPageActions } from '../../model/slice/articlePageSlice/articlePageSlice'
import { type ArticleView } from '@/entities/Article'
import { ArticleViewSelector } from '@/features/ArticleViewSelector'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'

interface ViewSelectorContainerProps {
  className?: string
}

export const ViewSelectorContainer: React.FC<ViewSelectorContainerProps> =
  memo((props: ViewSelectorContainerProps) => {
    const { className } = props
    const view = useSelector(getArticlePageView)
    const dispatch = useAppDispatch()

    const fetchData = React.useCallback(() => {
      dispatch(articlesPageActions.setPage(1))
      dispatch(fetchArticles({
        replace: true,
      }))
    }, [dispatch])

    const onChangeView = React.useCallback((view: ArticleView) => {
      dispatch(articlesPageActions.setView(view))
      fetchData()
    }, [dispatch, fetchData])

    return (
      <ArticleViewSelector
        view={view}
        onViewClick={onChangeView}
        className={className}
      />
    )
  })
