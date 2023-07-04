import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentList.module.scss'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { CommentCard } from 'entities/Comment/ui/CommentCard/CommentCard'
import { type Comment } from '../../model/types/comment'

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList: React.FC<CommentListProps> = memo((props: CommentListProps) => {
  const {
    className,
    comments,
    isLoading,
  } = props
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {
        comments?.length
          ? comments.map(comment => (
            <CommentCard
              className={cls.comment}
              comment={comment}
              key={comment.id}
              isLoading={isLoading}
            />
          ))
          : <Text text={t('comments-not-found')} />
      }
    </div>
  )
})
