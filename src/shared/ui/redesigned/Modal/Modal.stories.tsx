import type { ComponentStory, Meta } from '@storybook/react'
import { ThemeDecorator } from '../../../config/storybook/ThemeDecorator/ThemeDecorator'
import { Modal } from './Modal'
import { Theme } from '@/shared/const'
import { Portal } from '@/shared/ui/redesigned/Portal'

const meta: Meta<typeof Modal> = {
  title: 'shared/redesigned/Modal',
  component: Modal,
  argTypes: {

  },
}

export default meta
const Template: ComponentStory<typeof Modal> = (args) => (
  <Portal
    element={
      document.getElementById('storybook-root') ?? document.getElementById('root') ?? document.body
    }
  >
    <Modal {...args} />
  </Portal>
)

export const Primary = Template.bind({})
Primary.args = {
  isOpen: true,
  children: <h1>Hello world</h1>,
}

export const ModalDark = Template.bind({})
ModalDark.args = {
  isOpen: true,
  children: <h1>Hello world</h1>,
}
ModalDark.decorators = [ThemeDecorator(Theme.DARK)]
