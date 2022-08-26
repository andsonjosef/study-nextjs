import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { deleteTaskState, TaskState } from '../../store/task';

function Card(task: TaskState) {
  const dispatch = useDispatch();

  const handleDeleteTask = async (event: any) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    dispatch(deleteTaskState(task));
  }

  return (
    <div className={"border-2 p-4 mb-4 w-full"}>
      <h2 className="m-0 font-bold">{task.title}</h2>
      <div className='flex justify-between flex-row'>
        <p className='card-desc'>{task.description}</p>
        <div className='flex flex-col justify-between items-center gap-4'>
          <div className='flex flex-row justify-between gap-4'>
            <Link href={{
              pathname: '/edit',
              query: {task: JSON.stringify(task)}
            }} >
              <button className='btn btn-green'>edit</button>
            </Link>
            <button onClick={handleDeleteTask} className='btn btn-red'>delete</button>
          </div>
          <p>{task.date}</p>
        </div>
      </div>
    </div >
  );
};

export default Card;
