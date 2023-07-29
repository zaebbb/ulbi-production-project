import type { ComponentStory, Meta } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import LoginForm from './LoginForm'

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
Primary.decorators = [StoreDecorator({
  loginForm: {
    username: '123',
    password: '123',
  },
})]

export const DataError = Template.bind({})
DataError.args = {}
DataError.decorators = [StoreDecorator({
  loginForm: {
    username: '123',
    password: '123',
    error: 'Ошибка ввода данных',
  },
})]

export const Loading = Template.bind({})
Loading.args = {}
Loading.decorators = [StoreDecorator({
  loginForm: {
    username: '123',
    password: '123',
    isLoading: true,
  },
})]
