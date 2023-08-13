import { ComponentMeta } from '@storybook/react'
import type { ComponentStory } from '@storybook/react'
import withMock from 'storybook-addon-mock'
import ArticleRating from './ArticleRating'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'features/ArticleRating',
  component: ArticleRating,
  decorators: [
    withMock,
  ],
} satisfies ComponentMeta<typeof ArticleRating>

const Template: ComponentStory<typeof ArticleRating> =
  (args) => <ArticleRating {...args} />

export const Primary = Template.bind({})
Primary.decorators = [
  StoreDecorator({}),
]
Primary.parameters = {
  mockData: [
    {
      url: __API__ + '/article-ratings?userId=1',
      method: 'GET',
      status: 200,
      response: [
        {
          id: '1',
          rate: 3,
          feedback: 'text',
          articleId: '1',
          userId: '1',
        },
      ],
    },
  ],
}
