import { LOGIN_BG_IMG } from "../utils/constants"
import GptMoviesSuggestion from "./GptMoviesSuggestion"
import GptSearchBar from "./GptSearchBar"

const GptSearchPage = () => {
  return (
    <div>
        <div className='absolute -z-10'>
            <img src={LOGIN_BG_IMG}
                alt='background' />
        </div>
        <GptSearchBar />
        <GptMoviesSuggestion />
    </div>
  )
}

export default GptSearchPage
