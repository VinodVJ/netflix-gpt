const VideoTitle = ({title, description}) => {
  return (
    <div className='pt-36 px-12'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{description}</p>
        <div>
            <button className='bg-gray-500 text-white text-xl px-12 p-4 bg-opacity-50 rounded-lg'>
               ▶️ Play
            </button>
            <button className='bg-gray-500 text-white text-xl px-12 p-4 bg-opacity-50 rounded-lg mx-2'>
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle
