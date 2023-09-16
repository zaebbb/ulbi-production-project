import React, { memo } from 'react'
import { useNotifications } from '../../api/notificationApi'
import { NotificationItem } from '../NotificationItem/NotificationItem'
import cls from './NotificationList.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { VStack } from '@/shared/ui/redesigned/Stack'

interface NotificationListProps {
  className?: string
}

export const NotificationList: React.FC<NotificationListProps> =
  memo((props: NotificationListProps) => {
    const { className } = props
    const {
      isLoading, data: notifications,
    } = useNotifications(null, {
      pollingInterval: 5000,
    })

    if (isLoading) {
      return (
        <VStack
          className={classNames(cls.NotificationList, {}, [className])}
        >
          <VStack gap={8}>
            <Skeleton border={'8px'} width={300} height={30} />
            <Skeleton border={'8px'} width={200} height={30} />
          </VStack>
          <VStack gap={8}>
            <Skeleton border={'8px'} width={300} height={30} />
            <Skeleton border={'8px'} width={200} height={30} />
          </VStack>
          <VStack gap={8}>
            <Skeleton border={'8px'} width={300} height={30} />
            <Skeleton border={'8px'} width={200} height={30} />
          </VStack>
        </VStack>
      )
    }

    return (
      <VStack
        gap={16}
        className={classNames(cls.NotificationList, {}, [className])}
      >
        {notifications?.map(notification => (
          <NotificationItem
            key={notification.id}
            notification={notification}
          />
        ))}
      </VStack>
    )
  })
