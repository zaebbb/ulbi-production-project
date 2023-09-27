import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { type Comment } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'
import cls from './CommentList.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

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

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentList, {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
    )
  }

  const text = (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      off={<TextDeprecated text={t('comments-not-found')} />}
      on={<Text text={t('comments-not-found')} />}
    />
  )

  return (
    <VStack gap={16} isMax className={classNames('', {}, [className])}>
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
          : text
      }
    </VStack>
  )
})
