import React, { memo } from 'react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Icon } from 'widgets/Icon/Icon'
import NotificationIcon from 'shared/assets/icons/norification.svg'
import { NotificationList } from 'entities/Notification'
import { Popover } from 'shared/ui/Popups'
import cls from './NotificationButton.module.scss'

interface NotificationButtonProps {
  className?: string
}

export const NotificationButton: React.FC<NotificationButtonProps> =
  memo((props: NotificationButtonProps) => {
    const { className } = props

    return (
      <Popover
        className={className}
        trigger={
          <Button
            theme={ThemeButton.CLEAR}
          >
            <Icon Svg={NotificationIcon} isInverted />
          </Button>
        }
      >
        <NotificationList className={cls.notifications} />
      </Popover>
    )
  })
