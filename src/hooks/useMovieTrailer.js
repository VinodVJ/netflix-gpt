import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants'
import { addTrailerVideo } from '../utils/moviesSlice';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMovieClips = async () => { 
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const dataJson = await data.json();
        const filteredData = dataJson.results.filter((item) => item.type === 'Trailer');
        const trailer = filteredData.length ? filteredData[0] : dataJson.results[0];
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        getMovieClips();
    }, []);
}

export default useMovieTrailer;
