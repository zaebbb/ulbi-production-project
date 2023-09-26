import React, { memo } from 'react'
import { type ArticleCodeBlock } from '../../model/types/article'
import cls from './ArticleCodeBlockComponent.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { Code as CodeDeprecated } from '@/shared/ui/deprecated/Code'
import { Code } from '@/shared/ui/redesigned/Code'

interface ArticleCodeBlockComponentProps {
  className?: string
  block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent: React.FC<ArticleCodeBlockComponentProps> =
  memo((props: ArticleCodeBlockComponentProps) => {
    const {
      className,
      block,
    } = props

    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        off={
          <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
            <CodeDeprecated codeData={block.code} />
          </div>
        }
        on={
          <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
            <Code codeData={block.code} />
          </div>
        }
      />
    )
  })
