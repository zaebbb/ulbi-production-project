import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import ArticleEditPage from './ArticleEditPage'

const meta: Meta<typeof ArticleEditPage> = {
  title: 'CHANGE/ArticleEditPage',
  component: ArticleEditPage,
}

export default meta
type Story = StoryObj<typeof ArticleEditPage>

export const Primary: Story = {}
Primary.decorators = [
  StoreDecorator({}),
]
