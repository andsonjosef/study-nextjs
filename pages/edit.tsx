import { useState } from 'react';
import { NavigationButtons } from '../component/NavigationButtons';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from 'react-redux';
import { setTaskState, TaskState } from '../store/task';
import { withRouter } from 'next/router';
import { useRouter } from 'next/router'

function Edit({ router: { query } }: any) {
  const router = useRouter()

  let task: TaskState | null = null;
  if (query && query.task) {
    task = JSON.parse(query.task);
  }

  const [startDate, setStartDate] = useState(task && task.date ? new Date(task.date) : new Date());
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
    router.push('/')
  }

  return (
    <div className='container m-auto'>
      <NavigationButtons />
      <div className="w-full max-w-xs m-auto mt-28">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" >
              title
            </label>
            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline" defaultValue={task?.title} id="title" type="text" placeholder="Insert title">
            </input>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <textarea className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-white-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" defaultValue={task?.description} id="description" placeholder="Insert description">
            </textarea>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Date
            </label>
            <DatePicker id="date" className='w-full shadow appearance-none border border-red-500 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline' selected={startDate} onChange={(date: Date) => setStartDate(date)} />
          </div>
          <div className="items-center text-center">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default withRouter(Edit);
