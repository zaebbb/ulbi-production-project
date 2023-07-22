import type { ComponentStory, Meta } from '@storybook/react'
import { Flex } from './Flex'

const meta: Meta<typeof Flex> = {
  title: 'shared/Flex',
  component: Flex,
}

const FlexTestComponent = (
  <>
    <div>Карточка 1</div>
    <div>Карточка 2</div>
    <div>Карточка 3</div>
    <div>Карточка 4</div>
    <div>Карточка 5</div>
  </>
)

export default meta
const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />

export const Default = Template.bind({})
Default.args = {
  children: FlexTestComponent,
}

export const Column = Template.bind({})
Column.args = {
  children: FlexTestComponent,
  direction: 'column',
}

export const ColumnCenter = Template.bind({})
ColumnCenter.args = {
  children: FlexTestComponent,
  direction: 'column',
  align: 'center',
}

export const JustifyBetween = Template.bind({})
JustifyBetween.args = {
  children: FlexTestComponent,
  justify: 'space-between',
}

export const Gap = Template.bind({})
Gap.args = {
  children: FlexTestComponent,
  gap: 16,
}
