import React, { memo } from 'react'
import { type ArticleTextBlock } from '../../model/types/article'
import cls from './ArticleTextBlockComponent.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { Text } from '@/shared/ui/redesigned/Text'

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
      <ToggleFeatures
        feature={'isAppRedesigned'}
        off={
          <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            {block.title && (
              <TextDeprecated title={block.title} className={cls.title} />
            )}
            {block.paragraphs.map((paragraph, i) => (
              <TextDeprecated key={i} text={paragraph} className={cls.text} />
            ))}
          </div>
        }
        on={
          <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            {block.title && (
              <Text title={block.title} className={cls.title} />
            )}
            {block.paragraphs.map((paragraph, i) => (
              <Text key={i} text={paragraph} className={cls.text} />
            ))}
          </div>
        }
      />
    )
  })
