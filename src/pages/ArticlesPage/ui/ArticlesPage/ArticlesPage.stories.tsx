import type { Meta, StoryObj } from '@storybook/react'
import ArticlesPage from './ArticlesPage'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta: Meta<typeof ArticlesPage> = {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
}

export default meta
type Story = StoryObj<typeof ArticlesPage>

export const Primary: Story = {}
Primary.decorators = [
  StoreDecorator({}),
]
