import Categories from './Categories'
import LatestPosts from './LatestPosts'
import PopularPosts from './PopularPosts'

const Featured = () => {
  return (
    <div className=' w-full h-fit pl-[165px] pr-[165px] max-w-[1536px]'>
      <Categories />
      <LatestPosts />
      <div className='w-full h-fit object-cover mt-52 mb-16 cursor-pointer'>
        <img loading='lazy' src='/assets/images/Ad 1.jpg' alt='Advertisement' />
      </div>
      <PopularPosts />
    </div>
  )
}

export default Featured
