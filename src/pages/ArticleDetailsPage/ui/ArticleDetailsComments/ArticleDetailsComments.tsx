import React, { memo } from 'react'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { AddCommentForm } from 'features/addCommentForm'
import { CommentList } from 'entities/Comment'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import {
  addCommentForArticle,
} from '../../model/services/addCommentForArticle/addCommentForArticle'
import { getArticleComments } from '../../model/slice/articleDetailsComments'
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments'
import {
  fetchCommentsArticleById,
} from '../../model/services/fetchCommentsArticleById/fetchCommentsArticleById'
import cls from './ArticleDetailsComments.module.scss'

interface ArticleDetailsCommentsProps {
  className?: string
  id: string
}

export const ArticleDetailsComments: React.FC<ArticleDetailsCommentsProps> =
  memo((props: ArticleDetailsCommentsProps) => {
    const {
      className,
      id,
    } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const comments = useSelector(getArticleComments.selectAll)
    const commentIsLoading = useSelector(getArticleDetailsCommentsIsLoading)

    const onSendComment = React.useCallback((text: string) => {
      dispatch(addCommentForArticle(text))
    }, [dispatch])

    useInitialEffect(() => {
      dispatch(fetchCommentsArticleById(id))
    })

    return (
      <div className={classNames(cls.ArticleDetailsComments, {}, [className])}>
        <Text
          size={TextSize.L}
          className={cls.commentTitle}
          title={t('article-comments')}
        />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList
          comments={comments}
          isLoading={commentIsLoading}
        />
      </div>
    )
  })
