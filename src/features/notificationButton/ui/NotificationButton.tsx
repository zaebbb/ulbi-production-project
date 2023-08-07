import React, { memo } from 'react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Icon } from 'widgets/Icon/Icon'
import NotificationIcon from 'shared/assets/icons/norification.svg'
import { NotificationList } from 'entities/Notification'
import { Popover } from 'shared/ui/Popups'
import { BrowserView, MobileView } from 'react-device-detect'
import { Drawer } from 'shared/ui/Drawer/Drawer'
import cls from './NotificationButton.module.scss'

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
