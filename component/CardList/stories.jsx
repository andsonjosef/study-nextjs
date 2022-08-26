import { CardList } from '.';
import mock from './mock';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'CardList',
  component: CardList,
  args: {
    cards: mock
  }
};

export const Template = (args) => {
  return (
    <div>
      <CardList {...args} />
    </div>
  );
};
