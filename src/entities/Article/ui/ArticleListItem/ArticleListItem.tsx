import React, { type HTMLAttributeAnchorTarget, memo } from 'react'
import { useTranslation } from 'react-i18next'
import {
  type Article,
  ArticleBlockType,
  type ArticleTextBlock,
  ArticleView,
} from '../../model/types/article'
import {
  ArticleTextBlockComponent,
} from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import cls from './ArticleListItem.module.scss'
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
import NotFoundImage from '@/shared/assets/images/not-found.png'
import { getRouteArticleDetails } from '@/shared/const'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppImage } from '@/shared/ui/AppImage'
import { AppLink } from '@/shared/ui/AppLink'
import { Avatar } from '@/shared/ui/Avatar'
import { Button, ThemeButton } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Icon } from '@/shared/ui/Icon'
import { Skeleton } from '@/shared/ui/Skeleton'
import { Text } from '@/shared/ui/Text'

interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
  target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem: React.FC<ArticleListItemProps> =
  memo((props: ArticleListItemProps) => {
    const {
      className,
      article,
      view,
      target,
    } = props
    const { t } = useTranslation()

    const types = (
      <Text
        text={article.type.join(', ')}
        className={cls.types}
      />
    )

    const views = (
      <>
        <Text
          text={String(article.views)}
          className={cls.views}
        />
        <Icon Svg={EyeIcon} />
      </>
    )

    const skeleton = (
      <Skeleton
        width={view === ArticleView.BIG ? '100%' : '200px'}
        height={view === ArticleView.BIG ? '250px' : '200px'}
      />
    )

    const fallbackImage = (
      <AppImage
        src={NotFoundImage}
        fallback={skeleton}
        errorFallback={NotFoundImage}
        className={cls.img}
      />
    )

    const image = (
      <AppImage
        src={article.image}
        alt={article.title}
        className={cls.img}
        fallback={skeleton}
        errorFallback={fallbackImage}
      />
    )

    if (view === ArticleView.BIG) {
      const textBlock = article.blocks.find(
        block => block.type === ArticleBlockType.TEXT
      ) as ArticleTextBlock

      return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
          <Card className={cls.card}>
            <div className={cls.header}>
              <Avatar size={30} src={article.user.avatar} />
              <Text text={article.user.username} className={cls.username} />
              <Text text={article.createdAt} className={cls.date} />
            </div>

            <Text
              title={article.title}
              className={cls.title}
            />

            {types}

            {image}

            {
              textBlock && (
                <ArticleTextBlockComponent className={cls.block} block={textBlock} />
              )
            }

            <div className={cls.footer}>
              <AppLink
                target={target}
                to={getRouteArticleDetails(article.id)}
              >
                <Button
                  theme={ThemeButton.OUTLINE}
                >
                  {t('article-read-more')}
                </Button>
              </AppLink>
              {views}
            </div>
          </Card>
        </div>
      )
    }

    return (
      <AppLink
        target={target}
        to={getRouteArticleDetails(article.id)}
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card
          className={cls.card}
        >
          <div className={cls.imageWrapper}>
            {image}
            <Text text={article.createdAt} className={cls.date} />
          </div>

          <div className={cls.infoWrapper}>
            {types}
            {views}
          </div>

          <Text
            text={article.title}
            className={cls.title}
          />
        </Card>
      </AppLink>
    )
  })
