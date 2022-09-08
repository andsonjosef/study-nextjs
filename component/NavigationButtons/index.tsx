import Link from 'next/link';

export const NavigationButtons = ( addTask: any) => {

  return (
    <div className="flex justify-between w-full my-4">
      <Link href="/main" >
        <button className='btn btn-blue'>Tasks</button>
      </Link>
      <Link href="/edit">
      <button onClick={addTask} className='btn btn-blue'>Add Tasks</button>
      </Link>
    </div >
  );
};