import type { ComponentStory, Meta } from '@storybook/react'
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm'

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {

  },
}

export default meta
const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const Primary = Template.bind({})
Primary.args = {}
