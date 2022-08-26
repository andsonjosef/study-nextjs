import { TaskState } from '../../store/task';
import Card from '../Card';

export type CardsListProps = {
  tasks: TaskState[];
}

export const CardList = ({ tasks }: CardsListProps) => {
  
  return (
    <div className='container'>
      {tasks.map((task: TaskState, index: number) => <Card key={index} {...task} />)}
    </div>
  );
};
