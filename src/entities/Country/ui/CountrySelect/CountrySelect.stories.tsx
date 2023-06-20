import type { ComponentStory, Meta } from '@storybook/react'
import { CountrySelect } from './CountrySelect'

const meta: Meta<typeof CountrySelect> = {
  title: 'entities/CountrySelect',
  component: CountrySelect,
}

export default meta
const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Выберите значение',
}
export const NoLabel = Template.bind({})
