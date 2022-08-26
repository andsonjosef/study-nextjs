import { Card } from '.';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Card',
  component: Card,
  args: {
    title: 'Title Card',
    description: 'Description',
    createdAt: new Date()
  },
  argTypes: {
    title: { type: 'string' },
    description: { type: 'string' },
    createdAt: {type: 'date'}
  },
};

export const Template = (args) => {
  return (
    <div>
      <Card {...args} />
    </div>
  );
};
