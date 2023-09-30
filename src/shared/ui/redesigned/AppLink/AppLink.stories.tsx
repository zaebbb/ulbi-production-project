import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from '../../../config/storybook/ThemeDecorator/ThemeDecorator'
import { AppLink } from './AppLink'
import { Theme } from '@/shared/const'

const meta: ComponentMeta<typeof AppLink> = {
  title: 'shared/redesigned/AppLink',
  component: AppLink,
  args: {
    to: '/',
  },
}

export default meta
const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const AppLinkPrimaryLight = Template.bind({})
AppLinkPrimaryLight.args = {
  children: 'AppLinkPrimaryLight',
  variant: 'primary',
}

export const AppLinkSecondaryLight = Template.bind({})
AppLinkSecondaryLight.args = {
  children: 'AppLinkSecondaryLight',
  variant: 'primary',
}

export const AppLinkPrimaryDark = Template.bind({})
AppLinkPrimaryDark.args = {
  children: 'AppLinkPrimaryDark',
  variant: 'primary',
}
AppLinkPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const AppLinkSecondaryDark = Template.bind({})
AppLinkSecondaryDark.args = {
  children: 'AppLinkSecondaryDark',
  variant: 'primary',
}
AppLinkSecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
