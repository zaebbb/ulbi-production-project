import { Listbox as HListBox } from '@headlessui/react'
import React, { Fragment, useMemo } from 'react'
import { HStack } from '../../../Stack/Hstack/HStack'
import popupsCls from '../../styles/popup.module.scss'
import cls from './ListBox.module.scss'
import { type Additional, classNames } from '@/shared/lib/classNames/classNames'
import { TypedMemo } from '@/shared/lib/components/TypedMemo'
import { type DirectionType } from '@/shared/types/ui'
import { Button } from '@/shared/ui/redesigned/Button/Button'
import { Text } from '@/shared/ui/redesigned/Text/Text'

export interface ListBoxItem<T extends string> {
  value: T
  content: React.ReactNode
  disabled?: boolean
}

interface ListBoxProps<T extends string> {
  className?: string
  items?: Array<ListBoxItem<T>>
  value?: T
  defaultValue?: T
  onChange: (value: T) => void
  readonly?: boolean
  label?: string
  direction?: DirectionType
}

export const ListBoxComponent = <T extends string>(props: ListBoxProps<T>) => {
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

  const selectedItem = useMemo(() => {
    return items?.find(item => item.value === value)
  }, [items, value])

  const additionalOptions: Additional = [
    popupsCls[`direction-${direction}`],
    popupsCls.menu,
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
            variant={'filled'}
            disabled={readonly}
            className={cls.button}
          >
            {selectedItem?.content ?? defaultValue}
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
                        [cls.selected]: selected,
                      }
                    )
                  }
                >
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  )
}

export const ListBox = TypedMemo(ListBoxComponent)
