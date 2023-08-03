import { ComponentMeta, type ComponentStory } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import withMock from 'storybook-addon-mock'
import { ArticleRecommendationsList } from './ArticleRecommendationsList'

export default {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  decorators: [
    withMock,
  ],
} satisfies ComponentMeta<typeof ArticleRecommendationsList>

const Template: ComponentStory<typeof ArticleRecommendationsList> =
  (args) => <ArticleRecommendationsList {...args} />

export const Primary = Template.bind({})
Primary.decorators = [
  StoreDecorator({}),
]
Primary.parameters = {
  mockData: [
    {
      url: __API__ + '/articles?_limit=3',
      method: 'GET',
      status: 200,
      response: [
        {
          id: '1',
          title: 'JavaScript',
          subtitle: 'new js 2023',
          userId: '1',
          // eslint-disable-next-line max-len
          image: 'https://randomwordgenerator.com/img/picture-generator/55e1d6464b57ac14f1dc8460962e33791c3ad6e04e507440722d72d5924ec7_640.jpg',
          views: 1022,
          createdAt: '26.06.2023',
          type: [
            'IT',
            'JS',
          ],
          blocks: [],
        },
        {
          id: '2',
          title: 'JavaScript',
          subtitle: 'new js 2023',
          userId: '1',
          // eslint-disable-next-line max-len
          image: 'https://randomwordgenerator.com/img/picture-generator/55e1d6464b57ac14f1dc8460962e33791c3ad6e04e507440722d72d5924ec7_640.jpg',
          views: 1022,
          createdAt: '26.06.2023',
          type: [
            'IT',
            'JS',
          ],
          blocks: [],
        },
        {
          id: '3',
          title: 'JavaScript',
          subtitle: 'new js 2023',
          userId: '1',
          // eslint-disable-next-line max-len
          image: 'https://randomwordgenerator.com/img/picture-generator/55e1d6464b57ac14f1dc8460962e33791c3ad6e04e507440722d72d5924ec7_640.jpg',
          views: 1022,
          createdAt: '26.06.2023',
          type: [
            'IT',
            'JS',
          ],
          blocks: [],
        },
        {
          id: '4',
          title: 'JavaScript',
          subtitle: 'new js 2023',
          userId: '1',
          // eslint-disable-next-line max-len
          image: 'https://randomwordgenerator.com/img/picture-generator/55e1d6464b57ac14f1dc8460962e33791c3ad6e04e507440722d72d5924ec7_640.jpg',
          views: 1022,
          createdAt: '26.06.2023',
          type: [
            'IT',
            'JS',
          ],
          blocks: [],
        },
      ],
    },
  ],
}
