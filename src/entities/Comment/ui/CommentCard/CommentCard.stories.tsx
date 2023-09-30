import { ComponentMeta, type ComponentStory } from '@storybook/react'
import { CommentCard } from './CommentCard'
import {
  FeatureFlagsDecorator,
} from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
} satisfies ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> =
  (args) => <CommentCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  comment: { id: '1', text: 'hello world', user: { id: '1', username: 'test user' } },
}
Primary.decorators = [
  StoreDecorator({}),
]

export const isLoading = Template.bind({})
isLoading.args = {
  comment: { id: '1', text: 'hello world', user: { id: '1', username: 'test user' } },
  isLoading: true,
}
isLoading.decorators = [
  StoreDecorator({}),
]

export const PrimaryRedesigned = Template.bind({})
PrimaryRedesigned.args = {
  comment: { id: '1', text: 'hello world', user: { id: '1', username: 'test user' } },
}
PrimaryRedesigned.decorators = [
  StoreDecorator({}),
  FeatureFlagsDecorator({
    isAppRedesigned: true,
  }),
]

export const isLoadingRedesigned = Template.bind({})
isLoadingRedesigned.args = {
  comment: { id: '1', text: 'hello world', user: { id: '1', username: 'test user' } },
  isLoading: true,
}
isLoadingRedesigned.decorators = [
  StoreDecorator({}),
  FeatureFlagsDecorator({
    isAppRedesigned: true,
  }),
]
