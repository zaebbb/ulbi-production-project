import { ComponentMeta, type ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import AddCommentForm from './AddCommentForm'

export default {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
} satisfies ComponentMeta<typeof AddCommentForm>

const Template: ComponentStory<typeof AddCommentForm> =
  (args) => <AddCommentForm {...args} />

export const Primary = Template.bind({})
Primary.args = {
  onSendComment: action('onSendComment'),
}
Primary.decorators = [
  StoreDecorator({
    addCommentForm: {

    },
  }),
]
