import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useAddArticleRating, useGetArticleRating } from '../../api/articleRatingApi'
import { RatingCard } from '@/entities/Rating'
import { getUserAuthData } from '@/entities/User'
import { Skeleton } from '@/shared/ui/Skeleton'

export interface ArticleRatingProps {
  className?: string
  id?: string
}

const ArticleRating: React.FC<ArticleRatingProps> = memo((props: ArticleRatingProps) => {
  const { className, id } = props
  const { t } = useTranslation()
  const user = useSelector(getUserAuthData)
  const {
    isLoading,
    data,
  } = useGetArticleRating({
    articleId: id,
    userId: user?.id ?? '',
  })

  const [rateArticleMutation] = useAddArticleRating()

  const rating = data?.[0]

  const handleRateArticle = React.useCallback((rate: number, feedback?: string) => {
    try {
      void rateArticleMutation({
        articleId: id,
        userId: user?.id ?? '',
        rate,
        feedback,
      })
    } catch (e) {
      console.log(e)
    }
  }, [id, rateArticleMutation, user?.id])

  const onCancel = React.useCallback((starsCount: number) => {
    handleRateArticle(starsCount)
  }, [handleRateArticle])

  const onAccept = React.useCallback((starsCount: number, feedback?: string) => {
    handleRateArticle(starsCount, feedback)
  }, [handleRateArticle])

  if (isLoading) {
    return (
      <Skeleton width={'100%'} height={120} />
    )
  }

  return (
    <RatingCard
      className={className}
      onCancel={onCancel}
      onAccept={onAccept}
      title={!rating ? t('like-rating') : t('you-use-like-rating')}
      feedbackTitle={t('add-feedback-title')}
      hasFeedback
      rate={rating?.rate}
    />
  )
})

export default ArticleRating
