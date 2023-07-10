import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'
import { ArticleDetails } from 'entities/Article'
import { useNavigate, useParams } from 'react-router-dom'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { CommentList } from 'entities/Comment'
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader'
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../../model/slice/articleDetailsComments'
import { useSelector } from 'react-redux'
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
  fetchCommentsArticleById,
} from '../../model/services/fetchCommentsArticleById/fetchCommentsArticleById'
import { AddCommentForm } from 'features/addCommentForm'
import {
  addCommentForArticle,
} from '../../model/services/addCommentForArticle/addCommentForArticle'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Page } from 'shared/ui/Page/Page'

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
  const navigate = useNavigate()

  const onSendComment = React.useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(fetchCommentsArticleById(id))
  })

  const onBackToList = React.useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

  if (!id) {
    return (
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <Text title={t('article-not-found')} />
      </Page>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <Button
          theme={ThemeButton.OUTLINE}
          onClick={onBackToList}
        >
          {t('button-back')}
        </Button>

        <ArticleDetails id={id}/>
        <Text className={cls.commentTitle} title={t('article-comments')} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList
          comments={comments}
          isLoading={commentIsLoading}
        />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
