import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'

const Browse = () => {

  useNowPlayingMovies();
  
  return (
    <div>
        <Header />
        <div className='text-center content-center w-6/12 py-20 mx-auto font-bold text-3xl text-red-500'>
            Work In progress VJ 🚀
        </div>
    </div>
  )
}

export default Browse