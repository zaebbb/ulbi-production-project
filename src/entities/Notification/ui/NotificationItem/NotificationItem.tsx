import React, { memo } from 'react'
import { type Notification } from '../../model/types/notifications'
import cls from './NotificationItem.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card'
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { Card } from '@/shared/ui/redesigned/Card'
import { Text } from '@/shared/ui/redesigned/Text'

interface NotificationItemProps {
  className?: string
  notification: Notification
}

export const NotificationItem: React.FC<NotificationItemProps> =
  memo((props: NotificationItemProps) => {
    const {
      className,
      notification,
    } = props

    const contentNotification = (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        off={
          <CardDeprecated
            theme={CardTheme.OUTLINED}
            className={classNames(cls.NotificationItem, {}, [className])}
          >
            <TextDeprecated
              size={TextSize.S}
              title={notification.title}
              text={notification.description}
            />
          </CardDeprecated>
        }
        on={
          <Card
            className={classNames(cls.NotificationItem, {}, [className])}
          >
            <Text
              size={'s'}
              title={notification.title}
              text={notification.description}
            />
          </Card>
        }
      />
    )

    return notification.href ? (
      <AppLink to={notification.href} target={'_blank'}>
        {contentNotification}
      </AppLink>
    ) : contentNotification
  })
