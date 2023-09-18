import React, { memo } from 'react'
import cls from './Tabs.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Card } from '@/shared/ui/redesigned/Card'
import { Flex, type FlexDirection } from '@/shared/ui/redesigned/Stack/Flex/Flex'

export interface TabItem {
  value: string
  content: React.ReactNode
}

interface TabsProps {
  className?: string
  tabs: TabItem[]
  value: string
  onTabClick: (tab: TabItem) => void
  direction?: FlexDirection
}

export const Tabs: React.FC<TabsProps> = memo((props: TabsProps) => {
  const {
    className,
    tabs,
    value,
    onTabClick,
    direction = 'row',
  } = props

  const clickHandle = React.useCallback((tab: TabItem) => {
    return () => {
      onTabClick(tab)
    }
  }, [onTabClick])

  return (
    <Flex
      className={classNames(cls.Tabs, {}, [className])}
      direction={direction}
      gap={8}
      align={'start'}
    >
      {tabs.map(tab => {
        const isSelected = value === tab.value

        return (
          <Card
            key={tab.value}
            className={cls.tab}
            variant={isSelected ? 'light' : 'normal'}
            onClick={clickHandle(tab)}
            borderRadius={'round'}
          >
            {tab.content}
          </Card>
        )
      })}
    </Flex>
  )
})
