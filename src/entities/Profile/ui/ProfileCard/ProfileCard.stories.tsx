import type { ComponentStory } from '@storybook/react'
import { ComponentMeta } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import ImageStorybook from '@/shared/assets/images/storybook.png'
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const'

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {

  },
} satisfies ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> =
  (args) => <ProfileCard {...args} />

const args = {
  data: {
    first: '111',
    lastname: 'Mihailov',
    age: 2021,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Ekb',
    username: 'admin',
    avatar: ImageStorybook,
  },
}

export const Primary = Template.bind({})
Primary.args = args

export const IsLoading = Template.bind({})
IsLoading.args = {
  isLoading: true,
}

export const Error = Template.bind({})
Error.args = {
  error: 'error',
}

export const ProfileCardLight = Template.bind({})
ProfileCardLight.args = args
ProfileCardLight.decorators = [
  StoreDecorator({}),
]

export const ProfileCardDark = Template.bind({})
ProfileCardDark.args = args
ProfileCardDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({}),
]

export const ProfileCardLightRedesigned = Template.bind({})
ProfileCardLightRedesigned.args = args
ProfileCardLightRedesigned.decorators = [
  StoreDecorator({}),
  NewDesignDecorator,
]

export const ProfileCardDarkRedesigned = Template.bind({})
ProfileCardDarkRedesigned.args = args
ProfileCardDarkRedesigned.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({}),
  NewDesignDecorator,
]
