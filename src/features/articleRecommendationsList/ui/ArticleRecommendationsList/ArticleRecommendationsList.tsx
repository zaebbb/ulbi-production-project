import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import {
  useArticleRecommendationsList,
} from '../../api/articleRecommendationsApi'
import { ArticleList } from '@/entities/Article'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { VStack as VStackDeprecated } from '@/shared/ui/deprecated/Stack'
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

interface ArticleRecommendationsListProps {
  className?: string
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { className } = props
  const { t } = useTranslation()
  const {
    isLoading,
    data: articles,
    error,
  } = useArticleRecommendationsList(4)

  if (isLoading || error || !articles) {
    return null
  }

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      off={
        <VStackDeprecated
          gap={8}
          className={classNames('', {}, [className])}
          data-testid={'ArticleRecommendationsList'}
        >
          <TextDeprecated
            size={TextSize.L}
            title={t('article-recommendations')}
          />
          <ArticleList
            articles={articles}
            target={'_blank'}
          />
        </VStackDeprecated>
      }
      on={
        <VStack
          gap={8}
          className={classNames('', {}, [className])}
          data-testid={'ArticleRecommendationsList'}
        >
          <Text
            size={'l'}
            title={t('article-recommendations')}
          />
          <ArticleList
            articles={articles}
            target={'_blank'}
          />
        </VStack>
      }
    />
  )
})
