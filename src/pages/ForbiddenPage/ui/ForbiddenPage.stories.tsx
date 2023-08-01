import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import ForbiddenPage from './ForbiddenPage'

const meta: Meta<typeof ForbiddenPage> = {
  title: 'CHANGE/ForbiddenPage',
  component: ForbiddenPage,
}

export default meta
type Story = StoryObj<typeof ForbiddenPage>

export const Primary: Story = {}
Primary.decorators = [
  StoreDecorator({}),
]
