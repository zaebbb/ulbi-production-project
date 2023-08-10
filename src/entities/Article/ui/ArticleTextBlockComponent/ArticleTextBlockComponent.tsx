import React, { memo } from 'react'
import { type ArticleTextBlock } from '../../model/types/article'
import cls from './ArticleTextBlockComponent.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text } from '@/shared/ui/Text/Text'

interface ArticleTextBlockComponentProps {
  className?: string
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent: React.FC<ArticleTextBlockComponentProps> =
  memo((props: ArticleTextBlockComponentProps) => {
    const {
      className,
      block,
    } = props

    return (
      <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
        {block.title && (
          <Text title={block.title} className={cls.title} />
        )}
        {block.paragraphs.map((paragraph, i) => (
          <Text key={i} text={paragraph} className={cls.text} />
        ))}
      </div>
    )
  })
