import {
  type ArticleDetailsRecommendationsSchema,
} from './articleDetailsRecommendationsSchema'
import {
  type ArticleDetailsCommentsSchema,
} from './articleDetailsCommentsSchema'

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentsSchema
  recommendations: ArticleDetailsRecommendationsSchema
}
