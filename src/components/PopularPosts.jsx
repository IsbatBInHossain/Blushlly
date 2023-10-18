import PostCard from './cards/PostCard'

const PopularPosts = () => {
  return (
    <section className=' flex flex-col '>
      <div className=' flex justify-between items-center'>
        <div className=' h-px w-full bg-primary' />
        <h2 className=' font-viadaloka text-[28px] leading-10 mr-4 ml-4 whitespace-nowrap'>
          Popular Posts
        </h2>
        <div className=' h-px w-full bg-primary' />
      </div>

      <div className='grid grid-cols-6 grid-rows-[7] gap-[30px] items-center mt-10'>
        <div className=' relative col-span-2 row-span-3'>
          <div className=' w-full h-[250px] object-contain overflow-hidden'>
            <img src='/assets/images/Tips.jpg' alt='Popular post' />
          </div>
          <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2'>
            <PostCard
              width='292'
              height='168'
              subtitle='Hair'
              title='Vivamus placerat Luctus Neque nec Faucibus'
            />
          </div>
        </div>

        <div className=' relative col-span-2 row-span-3'>
          <div className=' w-full h-[250px] object-contain overflow-hidden'>
            <img src='/assets/images/Popular Post 2.jpg' alt='Popular post' />
          </div>
          <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2'>
            <PostCard
              width='292'
              height='168'
              subtitle='Makeup'
              title='Vivamus placerat Luctus Neque nec Faucibus'
            />
          </div>
        </div>

        <div className=' relative col-span-2 row-span-3'>
          <div className=' w-full h-[250px] object-contain overflow-hidden'>
            <img src='/assets/images/Popular Post 3.jpg' alt='Popular post' />
          </div>
          <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2'>
            <PostCard
              width='292'
              height='168'
              subtitle='Tips'
              title='Vivamus placerat Luctus Neque nec Faucibus'
            />
          </div>
        </div>
        <div className=' relative col-span-3 row-span-4'>
          <div className=' w-full h-[490px] object-fit overflow-hidden mt-[131px]'>
            <img src='/assets/images/Popular Post 4.jpg' alt='Popular post' />
          </div>
          <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2'>
            <PostCard
              width='410'
              height='168'
              subtitle='Skin'
              title='Sed dignissim quam nulla, at sodales elit venenatis at. In in  fringilla'
            />
          </div>
        </div>
        <div className=' relative col-span-3 row-span-4'>
          <div className=' w-full h-[490px] object-contain overflow-hidden mt-[131px]'>
            <img src='/assets/images/Popular Post 5.jpg' alt='Popular post' />
          </div>
          <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2'>
            <PostCard
              width='410'
              height='168'
              subtitle='Skin'
              title='Sed dignissim quam nulla, at sodales elit venenatis at. In in  fringilla'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularPosts
