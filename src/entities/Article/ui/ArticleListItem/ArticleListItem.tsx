import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticleListItem.module.scss'
import {
  type Article,
  ArticleBlockType,
  type ArticleTextBlock,
  ArticleView,
} from '../../model/types/article'
import { Text } from 'shared/ui/Text/Text'
import { Icon } from 'widgets/Icon/Icon'
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import { Card } from 'widgets/Card'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import {
  ArticleTextBlockComponent,
} from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
}

export const ArticleListItem: React.FC<ArticleListItemProps> =
  memo((props: ArticleListItemProps) => {
    const {
      className,
      article,
      view,
    } = props
    const { t } = useTranslation()
    const navigate = useNavigate()

    const onOpenArticle = React.useCallback(() => {
      navigate(RoutePath.article_details + article.id)
    }, [article.id, navigate])

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

    const image = (
      <img src={article.image} alt={article.title} className={cls.img} />
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
              <Button
                theme={ThemeButton.OUTLINE}
                onClick={onOpenArticle}
              >
                {t('article-read-more')}
              </Button>
              {views}
            </div>
          </Card>
        </div>
      )
    }

    return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card
          className={cls.card}
          onClick={onOpenArticle}
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
      </div>
    )
  })
