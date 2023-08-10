import type { Meta, StoryObj } from '@storybook/react'
import { ArticlePageFilters } from './ArticlePageFilters'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta: Meta<typeof ArticlePageFilters> = {
  title: 'pages/ArticlePage/ArticlePageFilters',
  component: ArticlePageFilters,
}

export default meta
type Story = StoryObj<typeof ArticlePageFilters>

export const Primary: Story = {}
Primary.decorators = [
  StoreDecorator({}),
]
