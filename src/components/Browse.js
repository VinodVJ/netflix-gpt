import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearchPage from './GptSearchPage';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  const gptSearchEnabled = useSelector(store => store.gpt?.gptSearchEnabled);

  return (
    <div>
        <Header />
        {gptSearchEnabled ? 
          <GptSearchPage /> : 
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        }
        <div className='text-center content-center w-6/12 py-20 mx-auto font-bold text-3xl text-red-500'>
            Work In progress VJ 🚀
        </div>
    </div>
  )
}

export default Browse