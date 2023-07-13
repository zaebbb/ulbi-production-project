import type { Meta, StoryObj } from '@storybook/react'
import { Page } from './Page'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta: Meta<typeof Page> = {
  title: 'shared/Page',
  component: Page,
}

export default meta
type Story = StoryObj<typeof Page>

export const Primary: Story = {}
Primary.decorators = [
  StoreDecorator({}),
]
