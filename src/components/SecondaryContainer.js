import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {

    const movies = useSelector(store => store.movies);
  return (
    <div className="bg-black">
        <div className="pl-4 md:pl-12 mt-0 md:-mt-52 relative">
            <MovieList title={'Now Playing Movies'} movies={movies.nowPlayingMovies} />
            <MovieList title={'Popular Movies'} movies={movies.popularMovies} />
            <MovieList title={'Most watched Movies'} movies={movies.nowPlayingMovies} />
            <MovieList title={'Trending Movies'} movies={movies.nowPlayingMovies} />
            <MovieList title={'Upcoming Movies'} movies={movies.nowPlayingMovies} />
        </div>
    </div>
  )
}

export default SecondaryContainer
