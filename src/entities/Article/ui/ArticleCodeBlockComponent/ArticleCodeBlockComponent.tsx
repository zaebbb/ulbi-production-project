import React, { memo } from 'react'
import { type ArticleCodeBlock } from '../../model/types/article'
import cls from './ArticleCodeBlockComponent.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Code } from '@/shared/ui/Code'

interface ArticleCodeBlockComponentProps {
  className?: string
  block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent: React.FC<ArticleCodeBlockComponentProps> =
  memo((props: ArticleCodeBlockComponentProps) => {
    const { className, block } = props

    return (
      <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
        <Code codeData={block.code} />
      </div>
    )
  })
