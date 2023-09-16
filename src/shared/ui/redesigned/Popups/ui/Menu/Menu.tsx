import { Menu as HMenu } from '@headlessui/react'
import React, { Fragment, memo } from 'react'
import popupsCls from '../../styles/popup.module.scss'
import cls from './Menu.module.scss'
import { type Additional, classNames } from '@/shared/lib/classNames/classNames'
import { type DirectionType } from '@/shared/types/ui'
import { AppLink } from '@/shared/ui/redesigned/AppLink/AppLink'
import { Button } from '@/shared/ui/redesigned/Button/Button'

export interface MenuItem {
  content?: React.ReactNode
  disabled?: boolean
  onClick?: () => void
  href?: string
}

interface MenuProps {
  className?: string
  items: MenuItem[]
  trigger: React.ReactNode
  direction?: DirectionType
}

export const Menu: React.FC<MenuProps> = memo((props: MenuProps) => {
  const {
    className,
    items,
    trigger,
    direction = 'bottom-left',
  } = props

  const additionalOptions: Additional = [
    popupsCls[`direction-${direction}`],
    popupsCls.menu,
  ]

  return (
    <HMenu
      as={'div'}
      className={classNames(cls.Menu, {}, [className])}
    >
      <HMenu.Button className={cls.button}>
        {trigger}
      </HMenu.Button>
      <HMenu.Items className={classNames(cls.items, {}, additionalOptions)}>
        {
          items.map((item, i) => {
            const content = ({ active }: { active: boolean }) => (
              <Button
                disabled={item?.disabled}
                onClick={item?.onClick}
                className={
                  classNames(
                    cls.item,
                    {
                      [cls.active]: active,
                      [cls.disabled]: item.disabled,
                    }
                  )
                }
              >
                {item.content}
              </Button>
            )

            if (item.href) {
              return (
                <HMenu.Item
                  key={i}
                  as={AppLink}
                  to={item.href}
                  disabled={item?.disabled}
                >
                  {content}
                </HMenu.Item>
              )
            }

            return (
              <HMenu.Item
                key={i}
                as={Fragment}
                disabled={item?.disabled}
              >
                {content}
              </HMenu.Item>
            )
          })
        }
      </HMenu.Items>
    </HMenu>
  )
})
