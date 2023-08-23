import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments'
import {
  addCommentForArticle,
} from '../../model/services/addCommentForArticle/addCommentForArticle'
import {
  fetchCommentsArticleById,
} from '../../model/services/fetchCommentsArticleById/fetchCommentsArticleById'
import { getArticleComments } from '../../model/slice/articleDetailsComments'
import cls from './ArticleDetailsComments.module.scss'
import { CommentList } from '@/entities/Comment'
import { AddCommentForm } from '@/features/addCommentForm'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Text, TextSize } from '@/shared/ui/Text'

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
