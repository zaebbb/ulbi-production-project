import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { type ArticleTextBlock, ArticleBlockType, ArticleView } from '../../../model/types/article'
import { type ArticleListItemProps } from '../ArticleListItem'
import cls from './ArticleListItemRedesigned.module.scss'
import EyeIcon from '@/shared/assets/icons/redesigned/EyeIcon.svg'
import NotFoundImage from '@/shared/assets/images/not-found.png'
import { getRouteArticleDetails } from '@/shared/const'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Button } from '@/shared/ui/redesigned/Button'
import { Card } from '@/shared/ui/redesigned/Card'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

export const ArticleListItemRedesigned: React.FC<ArticleListItemProps> =
  memo((props: ArticleListItemProps) => {
    const {
      className,
      article,
      view,
      target,
    } = props
    const { t } = useTranslation()

    const userInfo = (
      <>
        <Avatar size={32} src={article.user.avatar} className={cls.avatar} />
        <Text isBold text={article.user.username} />
      </>
    )

    const views = (
      <HStack gap={8} align={'center'}>
        <Icon Svg={EyeIcon} />
        <Text
          text={String(article.views)}
          className={cls.views}
        />
      </HStack>
    )

    const skeleton = (
      <Skeleton
        width={'100%'}
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

    if (view === ArticleView.BIG) {
      const textBlock = article.blocks.find(
        block => block.type === ArticleBlockType.TEXT
      ) as ArticleTextBlock

      return (
        <Card
          padding={'24'}
          isMax
          data-testid={'ArticleListItem'}
          className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        >
          <VStack isMax gap={16}>
            <HStack gap={8} isMax>
              {userInfo}
              <Text text={article.createdAt} />
            </HStack>

            <Text title={article.title} isBold size={'l'} />
            <Text title={article.subtitle} />

            <AppImage
              src={article.image}
              alt={article.title}
              className={cls.img}
              fallback={skeleton}
              errorFallback={fallbackImage}
            />

            {textBlock && (
              <Text
                className={cls.textBlock}
                text={textBlock.paragraphs.slice(0, 2).join(' ')}
              />
            )}

            <HStack isMax justify={'space-between'}>
              <AppLink
                target={target}
                to={getRouteArticleDetails(article.id)}
              >
                <Button
                  variant={'outline'}
                >
                  {t('article-read-more')}
                </Button>
              </AppLink>

              {views}
            </HStack>
          </VStack>
        </Card>
      )
    }

    return (
      <AppLink
        data-testid={'ArticleListItem'}
        target={target}
        to={getRouteArticleDetails(article.id)}
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card
          className={cls.card}
          padding={'0'}
          borderRadius={'round'}
        >
          <AppImage
            src={article.image}
            alt={article.title}
            className={cls.img}
            fallback={skeleton}
            errorFallback={fallbackImage}
          />

          <VStack className={cls.info} gap={4}>
            <Text
              text={article.title}
              className={cls.title}
            />
            <VStack isMax className={cls.footer} gap={4}>
              <HStack justify={'space-between'} isMax>
                <Text
                  text={article.createdAt}
                  className={cls.date}
                />
                {views}
              </HStack>
              <HStack gap={4}>{userInfo}</HStack>
            </VStack>
          </VStack>
        </Card>
      </AppLink>
    )
  })
