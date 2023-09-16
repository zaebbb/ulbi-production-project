import React, { memo } from 'react'
import { type ArticleImageBlock } from '../../model/types/article'
import cls from './ArticleImageBlockComponent.module.scss'
import NotFoundImage from '@/shared/assets/images/not-found.png'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text, TextAlign } from '@/shared/ui/deprecated/Text'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'

interface ArticleImageBlockComponentProps {
  className?: string
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent: React.FC<ArticleImageBlockComponentProps> =
  memo((props: ArticleImageBlockComponentProps) => {
    const {
      className,
      block,
    } = props

    return (
      <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
        <AppImage
          src={block.src}
          alt={block.title}
          className={cls.img}
          fallback={<Skeleton width={'100%'} height={200} />}
          errorFallback={NotFoundImage}
        />
        {block.title && (
          <Text text={block.title} align={TextAlign.CENTER} />
        )}
      </div>
    )
  })
