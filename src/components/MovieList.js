import MovieCard from "./MovieCard"

const MovieList = ({title, movies}) => {
  return (
    <div className="px-2">
        <h1 className="text-white text-3xl py-4">{title}</h1>
        <div className="flex overflow-x-scroll">
            <div className="flex">
                {movies?.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
            </div>
        </div>
    </div>

  )
}

export default MovieList