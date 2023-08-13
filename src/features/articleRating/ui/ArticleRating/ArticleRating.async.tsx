import React, { Suspense } from 'react'
import { type ArticleRatingProps } from './ArticleRating'
import { Loader } from '@/shared/ui/Loader/Loader'

export const ArticleRatingLazy =
  React.lazy(async () => await import('./ArticleRating'))

export const ArticleRatingAsync = (props: ArticleRatingProps) => (
  <Suspense fallback={<Loader />}>
    <ArticleRatingLazy {...props} />
  </Suspense>

)
