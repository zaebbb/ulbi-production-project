export type { ArticleDetailsPageSchema } from './model/types'
export type {
  ArticleDetailsRecommendationsSchema,
} from './model/types/articleDetailsRecommendationsSchema'
export type { ArticleDetailsCommentsSchema } from './model/types/articleDetailsCommentsSchema'
export { articleDetailsPageReducer } from './model/slice/index'
export {
  ArticleDetailsPageAsync as ArticleDetailsPage,
} from './ui/ArticleDetailsPage/ArticleDetailsPage.async'
