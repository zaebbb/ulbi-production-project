import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { CommentList } from 'entities/Comment'
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader'
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../../model/slice/articleDetailsComments'
import { useSelector } from 'react-redux'
import {
  getArticleDetailsCommentsIsLoading,
} from '../../model/selectors/comments'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
  fetchCommentsArticleById,
} from '../../model/services/fetchCommentsArticleById/fetchCommentsArticleById'

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducerList = {
  articleDetailsComments: articleDetailsCommentsReducer,
}

const ArticleDetailsPage: React.FC<ArticleDetailsPageProps> = (props: ArticleDetailsPageProps) => {
  const { className } = props
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation()
  const comments = useSelector(getArticleComments.selectAll)
  const commentIsLoading = useSelector(getArticleDetailsCommentsIsLoading)
  const dispatch = useAppDispatch()

  useInitialEffect(() => {
    dispatch(fetchCommentsArticleById(id))
  })

  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <Text title={t('article-not-found')} />
      </div>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <ArticleDetails id={id}/>
        <Text className={cls.commentTitle} title={t('article-comments')} />
        <CommentList
          comments={comments}
          isLoading={commentIsLoading}
        />
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
