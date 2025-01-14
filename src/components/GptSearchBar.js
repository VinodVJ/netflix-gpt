import { useRef } from "react"
import { API_OPTIONS } from "../utils/constants";
import openai from "../utils/openai";

const GptSearchBar = () => {

  const searchTxt = useRef(null);

  const searchMovieInTMDB = async (movie) => {
    const data = await fetch(
      'https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&page=1',
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  }

  const handleGptSearch = async () => {
    console.log(searchTxt.current.value);

    const gptQuery = "Act as a movie recomendation system and suggest some movies for the query : " +searchTxt.current.value+ " . Only give me name of 5 movies. comma seperated like the example results given ahead. Example Result: Gadar, Sholay, Don, Golmal, Koi Mil Gaya";
    // Make Api call for openAI
    const gptResults = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      store: true,
      messages: [
        {"role": "user", "content": gptQuery},
      ],
    });

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(',');

    // For each movie search and get it from TMDB
    const dataPromiceArray = gptMovies.map((movie) => searchMovieInTMDB(movie));
    const tmdbResults = Promise.all(dataPromiceArray);
  }

  return (
    <div className="pt-[10%] flex justify-center">
        <form className=" w-1/2 bg-black grid grid-cols-12"
          onSubmit={(e) => e.preventDefault()}>
            <input
              ref={searchTxt}
              type="text"
              placeholder="Write to get movie suggestions" 
              className="p-4 m-4 col-span-9"
            />
            <button
              className="bg-red-700 py-2 px-4 m-4 text-white rounded-lg col-span-3"
              onClick={handleGptSearch}>
              Search
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar
