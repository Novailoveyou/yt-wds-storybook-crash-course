import Stack from '../components/Stack'

const stack = {
  title: 'Components/Stack',
  component: Stack,
  argTypes: {
    numberOfChildren: { type: 'number', defaultValue: 4 }
  }
}

const Template = (numberOfChildren, ...args) => (
  <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map(n => (
      <div
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: 'red',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        {n + 1}
      </div>
    ))}
  </Stack>
)

const Horizontal = Template.bind({})
Horizontal.args = {
  direction: 'row',
  spacing: 2,
  wrap: false
}

export { Horizontal }

export default stack
