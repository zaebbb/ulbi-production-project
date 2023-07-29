import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { ArticleRecommendationsList } from './ArticleRecommendationsList'

export default {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
} satisfies ComponentMeta<typeof ArticleRecommendationsList>

const Template: ComponentStory<typeof ArticleRecommendationsList> =
  (args) => <ArticleRecommendationsList {...args} />

export const Normal = Template.bind({})
Normal.decorators = [
  StoreDecorator({}),
]
