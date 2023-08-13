import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import React, { memo } from 'react'
import { articleDetailsPageReducer } from '../../model/slice'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments'
import cls from './ArticleDetailsPage.module.scss'
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList'
import { Page } from '@/widgets/Page'
import { DynamicModuleLoader, type ReducerList } from '@/shared/lib/components/DynamicModuleLoader'
import { Text } from '@/shared/ui/Text/Text'
import { ArticleDetails } from '@/entities/Article'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ArticleRating } from '@/features/articleRating'
import { VStack } from '@/shared/ui/Stack/VStack/VStack'

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
          <ArticleRating id={id} />
          <ArticleRecommendationsList />
          <ArticleDetailsComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
