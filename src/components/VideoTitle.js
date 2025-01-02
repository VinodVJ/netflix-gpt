const VideoTitle = ({title, description}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{description}</p>
        <div>
            <button className='bg-white text-black text-xl px-12 p-4 rounded-lg hover:bg-opacity-60'>
                Play
            </button>
            <button className='bg-gray-500 text-white text-xl px-12 p-4 rounded-lg mx-2 hover:bg-opacity-60'>
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle
