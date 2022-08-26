import { useState } from 'react';
import { NavigationButtons } from '../component/NavigationButtons';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import { selectTaskState, setTaskState, TaskState } from '../store/task';
import { withRouter } from 'next/router';

function Edit({ router: { query } }: any) {
  let task: TaskState | null = null;
  if (query && query.task) {
    task = JSON.parse(query.task);
  }

  const [startDate, setStartDate] = useState(task && task.date ? new Date(task.date) : new Date());
  const cardList = useSelector(selectTaskState);
  const dispatch = useDispatch();

  const handleSubmit = async (event: any) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    dispatch(setTaskState({
      id: task && task.id ? task.id : null,
      title: event.target.title.value,
      description: event.target.description.value,
      date: event.target.date.value
    }));
  }

  return (
    <div className='container m-auto'>
      <NavigationButtons />

      <form className='flex-col text-center w-full' onSubmit={handleSubmit}>
        <div className='w-full mb-5'>
          <input defaultValue={task?.title} id="title" className='w-1/4' type={'text'} required placeholder={'Insert title'}></input>
        </div>
        <div className='w-full'>
          <textarea defaultValue={task?.description} id="description" className='w-1/4' required placeholder={'Insert description'}></textarea>
        </div>
        <div className='w-full'>
          <DatePicker id="date" className='w-1/4' selected={startDate} onChange={(date: Date) => setStartDate(date)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default withRouter(Edit);
