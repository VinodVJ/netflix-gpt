
const GptSearchBar = () => {
  return (
    <div>
        <form className="pt-[20%]">
            <input type="text" placeholder="Write to get movie suggestions" />
            <button className="bg-red-700 p-4 m-2 rounded-lg">Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar
