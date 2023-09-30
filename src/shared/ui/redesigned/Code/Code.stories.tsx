import { ComponentMeta } from '@storybook/react'
import type { ComponentStory } from '@storybook/react'
import { Code } from './Code'

export default {
  title: 'shared/redesigned/Code',
  component: Code,
} satisfies ComponentMeta<typeof Code>

const Template: ComponentStory<typeof Code> =
  (args) => <Code {...args} />

export const Primary = Template.bind({})
Primary.args = {
  codeData: 'import { ComponentMeta } from \'@storybook/react\'\n' +
    'import type { ComponentStory } from \'@storybook/react\'\n' +
    'import { Code } from \'./Code\'\n' +
    '\n' +
    'export default {\n' +
    '  title: \'shared/Code\',\n' +
    '  component: Code,\n' +
    '} satisfies ComponentMeta<typeof Code>\n' +
    '\n' +
    'const Template: ComponentStory<typeof Code> =\n' +
    '  (args) => <Code {...args} />\n' +
    '\n' +
    'export const Primary = Template.bind({})\n' +
    'Primary.args = {\n' +
    '  children: \'\',\n' +
    '}',
}
