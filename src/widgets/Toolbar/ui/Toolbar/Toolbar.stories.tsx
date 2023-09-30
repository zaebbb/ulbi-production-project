import type { Meta, StoryObj } from '@storybook/react'
import { Toolbar } from './Toolbar'

const meta: Meta<typeof Toolbar> = {
  title: 'CHANGE/Toolbar',
  component: Toolbar,
}

export default meta
type Story = StoryObj<typeof Toolbar>

export const Primary: Story = {}
