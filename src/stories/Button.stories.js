import Button from '../components/Button'

const button = {
  title: 'Components/Button',
  component: Button,
  argTypes: { handleClick: { action: 'handleClick' } }
}

const Template = args => <Button {...args} />

const Red = Template.bind({})

Red.args = {
  backgroundColor: 'red',
  label: 'Press Me',
  size: 'md'
}

const Green = Template.bind({})

Green.args = {
  backgroundColor: 'green',
  label: 'Press Me',
  size: 'md'
}

const Small = Template.bind({})

Small.args = {
  backgroundColor: 'red',
  label: 'Press Me',
  size: 'sm'
}

const Large = Template.bind({})

Large.args = {
  backgroundColor: 'red',
  label: 'Press Me',
  size: 'lg'
}

const LongLabel = Template.bind({})

LongLabel.args = {
  backgroundColor: 'red',
  label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  size: 'md'
}

export { Red, Green, Small, Large, LongLabel }

export default button
