import { ComponentMeta, type ComponentStory } from '@storybook/react'
import withMock from 'storybook-addon-mock'
import { NotificationList } from './NotificationList'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  decorators: [
    withMock,
  ],
} satisfies ComponentMeta<typeof NotificationList>

const Template: ComponentStory<typeof NotificationList> =
  (args) => <NotificationList {...args} />

export const Primary = Template.bind({})
Primary.decorators = [
  StoreDecorator({}),
]
Primary.parameters = {
  mockData: [
    {
      url: __API__ + '/notifications',
      method: 'GET',
      status: 200,
      response: [
        {
          id: '1',
          title: 'text',
          description: 'text',
        },
        {
          id: '2',
          title: 'text',
          description: 'text',
        },
        {
          id: '3',
          title: 'text',
          description: 'text',
        },
      ],
    },
  ],
}
