import type { ComponentStory, Meta } from '@storybook/react'
import { CurrencySelect } from './CurrencySelect'

const meta: Meta<typeof CurrencySelect> = {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
}

export default meta
const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Выберите значение',
}
export const NoLabel = Template.bind({})
