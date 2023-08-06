import { ComponentMeta, type ComponentStory } from '@storybook/react'
import { NotificationItem } from './NotificationItem'

export default {
  title: 'entities/Notification/NotificationItem',
  component: NotificationItem,
} satisfies ComponentMeta<typeof NotificationItem>

const Template: ComponentStory<typeof NotificationItem> =
  (args) => <NotificationItem {...args} />

export const PrimarySmall = Template.bind({})
PrimarySmall.args = {
  notification: {
    id: '1',
    title: 'Test',
    description: 'text',
  },
}
