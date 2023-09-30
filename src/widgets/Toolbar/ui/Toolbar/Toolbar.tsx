import React, { memo } from 'react'
import cls from './Toolbar.module.scss'
import { ScrollToTopButton } from '@/features/scrollToTopButton'
import { classNames } from '@/shared/lib/classNames/classNames'
import { VStack } from '@/shared/ui/redesigned/Stack'

interface ToolbarProps {
  className?: string
}

export const Toolbar: React.FC<ToolbarProps> = memo((props: ToolbarProps) => {
  const { className } = props

  return (
    <VStack
      gap={16}
      isMax
      align={'center'}
      justify={'center'}
      className={classNames(cls.Toolbar, {}, [className])}
    >
      <ScrollToTopButton />
    </VStack>
  )
})
