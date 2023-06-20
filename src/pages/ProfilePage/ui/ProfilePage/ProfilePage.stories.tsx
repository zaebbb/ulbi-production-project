import { ComponentMeta } from '@storybook/react'
import type { ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import ProfilePage from './ProfilePage'

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {

  },
} satisfies ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> =
  (args) => <ProfilePage {...args} />

export const ProfilePageLight = Template.bind({})
ProfilePageLight.decorators = [
  StoreDecorator({}),
]

export const ProfilePageDark = Template.bind({})
ProfilePageDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({}),
]
