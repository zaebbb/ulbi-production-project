import React, { Fragment, memo } from 'react'
import { type Additional, classNames } from 'shared/lib/classNames/classNames'
import cls from './Menu.module.scss'
import { Menu as HMenu } from '@headlessui/react'
import { Button } from '../Button/Button'
import { type DirectionType } from 'shared/types/ui'
import { AppLink } from '../AppLink/AppLink'

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
    cls[`direction-${direction}`],
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
          items.map((item) => {
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
                  key={item.href}
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
                key={item.href}
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
