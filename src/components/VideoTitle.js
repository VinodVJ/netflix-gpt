const VideoTitle = ({title, description}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/4'>{description}</p>
        <div className="my-4 md:my-0">
            <button className='bg-white text-black text-xl py-1 md:py-4 px-3 md:px-12 rounded-lg hover:bg-opacity-60'>
                Play
            </button>
            <button className='hidden md:inline-block bg-gray-500 text-white text-xl px-12 p-4 rounded-lg mx-2 hover:bg-opacity-60'>
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle
