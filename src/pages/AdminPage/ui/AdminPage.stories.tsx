import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import AdminPage from './AdminPage'

const meta: Meta<typeof AdminPage> = {
  title: 'pages/AdminPage',
  component: AdminPage,
}

export default meta
type Story = StoryObj<typeof AdminPage>

export const Primary: Story = {}
Primary.decorators = [
  StoreDecorator({}),
]
