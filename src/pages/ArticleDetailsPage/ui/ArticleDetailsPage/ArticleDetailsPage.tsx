import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { articleDetailsPageReducer } from '../../model/slice'
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import cls from './ArticleDetailsPage.module.scss'
import { ArticleDetails } from '@/entities/Article'
import { Counter } from '@/entities/Counter'
import { ArticleRating } from '@/features/articleRating'
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList'
import { classNames } from '@/shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducerList } from '@/shared/lib/components/DynamicModuleLoader'
import { ToggleFeatures } from '@/shared/lib/features'
import { Text } from '@/shared/ui/deprecated/Text'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Page } from '@/widgets/Page'

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducerList = {
  articleDetailsPage: articleDetailsPageReducer,
}

const ArticleDetailsPage: React.FC<ArticleDetailsPageProps> = (props: ArticleDetailsPageProps) => {
  const { className } = props
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation()
  if (!id) {
    return (
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <Text title={t('article-not-found')} />
      </Page>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <VStack gap={32}>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id}/>
          <ToggleFeatures
            feature={'isArticleCounterEnabled'}
            on={<Counter />}
            off={<Counter />}
          />
          <ArticleRating id={id} />
          <ArticleRecommendationsList />
          <ArticleDetailsComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
