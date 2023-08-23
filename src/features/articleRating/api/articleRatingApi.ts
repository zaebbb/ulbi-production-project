import { type Rating } from '@/entities/Rating'
import { rtkApi } from '@/shared/api/rtkApi'

export interface GetArticleRatingApiProps {
  userId?: string
  articleId?: string
}

export interface AddArticleRatingProps extends GetArticleRatingApiProps {
  rate: number
  feedback?: string
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<Rating[], GetArticleRatingApiProps>({
      query: ({ articleId, userId }) => ({
        url: '/article-ratings',
        params: {
          userId,
          articleId,
        },
      }),
    }),
    rateArticle: build.mutation<void, AddArticleRatingProps>({
      query: (articleRate) => ({
        url: '/article-ratings',
        method: 'POST',
        body: articleRate,
      }),
    }),
  }),
})

export const useGetArticleRating =
  articleRatingApi.useGetArticleRatingQuery

export const useAddArticleRating =
  articleRatingApi.useRateArticleMutation
