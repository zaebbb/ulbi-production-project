import { Listbox as HListBox } from '@headlessui/react'
import React, { Fragment, memo } from 'react'
import { Button, ThemeButton } from '../../../Button/Button'
import { HStack } from '../../../Stack/Hstack/HStack'
import { Text } from '../../../Text/Text'
import popupsCls from '../../styles/popup.module.scss'
import cls from './ListBox.module.scss'
import { type Additional, classNames } from '@/shared/lib/classNames/classNames'
import { type DirectionType } from '@/shared/types/ui'

export interface ListBoxItem {
  value: string
  content: React.ReactNode
  disabled?: boolean
}

interface ListBoxProps {
  className?: string
  items?: ListBoxItem[]
  value?: string
  defaultValue?: string
  onChange: <T extends string>(value: T) => void
  readonly?: boolean
  label?: string
  direction?: DirectionType
}

export const ListBox: React.FC<ListBoxProps> = memo((props: ListBoxProps) => {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly,
    label,
    direction = 'bottom-left',
  } = props

  const additionalOptions: Additional = [
    popupsCls[`direction-${direction}`],
  ]

  return (
    <HStack
      align={'center'}
      gap={4}
      className={classNames('', { [cls.readonly]: readonly }, [className])}
    >
      {label && <Text text={`${label}>`} />}
      <HListBox
        as={'div'}
        className={cls.list}
        value={value}
        onChange={onChange}
        disabled={readonly}
      >
        <HListBox.Button className={cls.trigger}>
          <Button
            disabled={readonly}
            theme={ThemeButton.OUTLINE}
            className={cls.button}
          >
            {value ?? defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options
          className={classNames(cls.options, {}, additionalOptions)}
        >
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              as={Fragment}
              value={item.value}
              disabled={item?.disabled}
            >
              {({ active, selected }) => (
                <li
                  className={
                    classNames(
                      cls.option,
                      {
                        [cls.active]: active,
                        [cls.disabled]: item.disabled,
                      }
                    )
                  }
                >
                  {selected && '!!!'}
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  )
})
