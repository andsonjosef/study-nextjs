import { useSelector } from 'react-redux';
import { CardList } from '../component/CardList';
import { NavigationButtons } from '../component/NavigationButtons';
import { selectTaskState } from "../store/task";



function Home() {
  const cardList = useSelector(selectTaskState);


  return (
    <div className='container m-auto'>
      <NavigationButtons />
      <CardList tasks={cardList} ></CardList>
    </div>
  )
}

export default Home;
