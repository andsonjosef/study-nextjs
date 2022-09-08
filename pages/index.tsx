import { useSelector } from 'react-redux';
import { CardList } from '../component/CardList';
import { NavigationButtons } from '../component/NavigationButtons';
import { selectTaskState } from "../store/task";
import SignIn from './api/signin';



function Home() {
  const cardList = useSelector(selectTaskState);


  return (
    <SignIn></SignIn>
    // <div className='container m-auto'>
    //   <NavigationButtons />
    //   <CardList tasks={cardList} ></CardList>
    // </div>
  )
}

export default Home;
