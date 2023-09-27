import React, { memo } from 'react'
import { type Comment } from '../../model/types/comment'
import cls from './CommentCard.module.scss'
import NoProfile from '@/shared/assets/icons/profile.png'
import { getRouteProfile } from '@/shared/const'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features'
import { Avatar as AvatarDeprecated } from '@/shared/ui/Avatar'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Card } from '@/shared/ui/redesigned/Card'
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

interface CommentCardProps {
  className?: string
  comment?: Comment
  isLoading?: boolean
}

export const CommentCard: React.FC<CommentCardProps> = memo((props: CommentCardProps) => {
  const {
    className,
    comment,
    isLoading,
  } = props

  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    off: () => SkeletonDeprecated,
    on: () => SkeletonRedesigned,
  })

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
        <div className={cls.author}>
          <Skeleton
            className={cls.avatar}
            border={'50%'}
            width={50}
            height={50}
          />
          <Skeleton width={200} height={30} />
        </div>
        <Skeleton width={450} height={30} />
      </div>
    )
  }

  if (!comment) {
    return null
  }

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      off={
        <div
          data-testid={'CommentCard'}
          className={classNames(cls.CommentCard, {}, [className])}
        >
          <AppLink to={getRouteProfile(comment.user.id)} className={cls.author}>
            <AvatarDeprecated
              src={
                comment.user.avatar
                  ? comment.user.avatar : NoProfile
              }
              size={40}
              className={cls.avatar}
            />
            <TextDeprecated text={comment.user.username} />
          </AppLink>
          <TextDeprecated text={comment.text} />
        </div>
      }
      on={
        <Card padding={'24'} borderRadius={'round'}>
          <VStack
            data-testid={'CommentCard'}
            gap={16}
            className={classNames(cls.CommentCardRedesigned, {}, [className])}
          >
            <AppLink to={getRouteProfile(comment.user.id)}>
              <HStack>
                <Avatar
                  src={
                    comment.user.avatar
                      ? comment.user.avatar : NoProfile
                  }
                  size={40}
                  className={cls.avatar}
                />
                <Text text={comment.user.username} isBold />
              </HStack>
            </AppLink>
            <Text text={comment.text} />
          </VStack>
        </Card>
      }
    />
  )
})
