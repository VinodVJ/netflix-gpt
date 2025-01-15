import { LOGIN_BG_IMG } from "../utils/constants"
import GptMoviesSuggestion from "./GptMoviesSuggestion"
import GptSearchBar from "./GptSearchBar"

const GptSearchPage = () => {
  return (
    <>
        <div className='absolute -z-10'>
            <img className="h-screen object-cover" src={LOGIN_BG_IMG}
                alt='background' />
        </div>
        <div className="">
            <GptSearchBar />
            <GptMoviesSuggestion />
        </div>
    </>

  )
}

export default GptSearchPage
