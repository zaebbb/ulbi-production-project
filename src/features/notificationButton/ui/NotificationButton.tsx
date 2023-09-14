import React, { memo } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import cls from './NotificationButton.module.scss'
import { NotificationList } from '@/entities/Notification'
import NotificationIcon from '@/shared/assets/icons/norification.svg'
import { Button, ThemeButton } from '@/shared/ui/deprecated/Button'
import { Drawer } from '@/shared/ui/deprecated/Drawer'
import { Icon } from '@/shared/ui/deprecated/Icon'
import { Popover } from '@/shared/ui/deprecated/Popups'

interface NotificationButtonProps {
  className?: string
}

export const NotificationButton: React.FC<NotificationButtonProps> =
  memo((props: NotificationButtonProps) => {
    const { className } = props

    const [isOpen, setIsOpen] = React.useState(false)

    const onOpenDrawer = React.useCallback(() => {
      setIsOpen(true)
    }, [])

    const onCloseDrawer = React.useCallback(() => {
      setIsOpen(false)
    }, [])

    const trigger = (
      <Button
        theme={ThemeButton.CLEAR}
        onClick={onOpenDrawer}
      >
        <Icon Svg={NotificationIcon} isInverted />
      </Button>
    )

    return (
      <div>

        <BrowserView>
          <Popover
            className={className}
            trigger={trigger}
          >
            <NotificationList className={cls.notifications} />
          </Popover>
        </BrowserView>
        <MobileView>
          {trigger}
          <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
            <NotificationList />
          </Drawer>

        </MobileView>
      </div>

    )
  })
