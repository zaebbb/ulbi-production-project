import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import React from 'react'
import { EditableProfileCard } from './EditableProfileCard'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
} satisfies ComponentMeta<typeof EditableProfileCard>

const Template: ComponentStory<typeof EditableProfileCard> =
  (args) => <EditableProfileCard {...args} />

export const Primary = Template.bind({})
Primary.decorators = [
  StoreDecorator({}),
]
