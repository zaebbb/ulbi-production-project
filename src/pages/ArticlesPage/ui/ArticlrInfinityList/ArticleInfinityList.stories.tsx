import type { Meta, StoryObj } from '@storybook/react'
import { ArticleInfinityList } from './ArticleInfinityList'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta: Meta<typeof ArticleInfinityList> = {
  title: 'pages/ArticlePage/ArticleInfinityList',
  component: ArticleInfinityList,
}

export default meta
type Story = StoryObj<typeof ArticleInfinityList>

export const Primary: Story = {}
Primary.decorators = [
  StoreDecorator({}),
]
