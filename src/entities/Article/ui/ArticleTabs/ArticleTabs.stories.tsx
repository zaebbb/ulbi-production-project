import type { Meta, StoryObj } from '@storybook/react'
import { ArticleTabs } from './ArticleTabs'

const meta: Meta<typeof ArticleTabs> = {
  title: 'entities/Article/ArticleTabs',
  component: ArticleTabs,
}

export default meta
type Story = StoryObj<typeof ArticleTabs>

export const Primary: Story = {}
