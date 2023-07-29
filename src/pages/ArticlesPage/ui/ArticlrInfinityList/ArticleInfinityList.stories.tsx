import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { ArticleInfinityList } from './ArticleInfinityList'

const meta: Meta<typeof ArticleInfinityList> = {
  title: 'CHANGE/ArticleInfinityList',
  component: ArticleInfinityList,
}

export default meta
type Story = StoryObj<typeof ArticleInfinityList>

export const Primary: Story = {}
Primary.decorators = [
  StoreDecorator({}),
]
