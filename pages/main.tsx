import { useSelector } from 'react-redux';
import { CardList } from '../component/CardList';
import { NavigationButtons } from '../component/NavigationButtons';
import { selectTaskState } from "../store/task";
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';

export default function Main() {
  const cardList = useSelector(selectTaskState);

  // useEffect(() => {
  //   api.get('/users');
  // })

  return (
    <div className='container m-auto'>
      <NavigationButtons />
      <CardList tasks={cardList} ></CardList>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['todorial.token']: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}