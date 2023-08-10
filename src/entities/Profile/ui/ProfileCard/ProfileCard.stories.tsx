import type { ComponentStory } from '@storybook/react'
import { ComponentMeta } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {

  },
} satisfies ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> =
  (args) => <ProfileCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  data: {
    first: '111',
    lastname: 'Mihailov',
    age: 2021,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Ekb',
    username: 'admin',
    avatar: 'https://avatarko.ru/img/kartinka/14/Iron_man_13295.jpg',
  },
}

export const IsLoading = Template.bind({})
IsLoading.args = {
  isLoading: true,
}

export const Error = Template.bind({})
Error.args = {
  error: 'error',
}

export const ProfileCardLight = Template.bind({})
ProfileCardLight.decorators = [
  StoreDecorator({}),
]

export const ProfileCardDark = Template.bind({})
ProfileCardDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({}),
]
