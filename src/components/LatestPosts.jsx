import PostCard from './cards/PostCard'

const LatestPosts = () => {
  return (
    <section className=' flex flex-col '>
      <div className=' flex justify-between items-center'>
        <div className=' h-px w-full bg-primary' />
        <h2 className=' font-viadaloka text-[28px] leading-10 mr-4 ml-4 whitespace-nowrap'>
          Latest Posts
        </h2>
        <div className=' h-px w-full bg-primary' />
      </div>

      <div className='flex justify-between gap-[30px] items-center mt-10'>
        <div className=' relative '>
          <div className='overflow-hidden'>
            <div className=' w-full h-[250px] object-contain hover:scale-125 duration-[1500ms] cursor-pointer'>
              <img
                src='/assets/images/Latest Post 1.jpg'
                alt='Latest post'
                loading='lazy'
              />
            </div>
          </div>
          <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10'>
            <PostCard
              width='292'
              height='168'
              subtitle='Hair'
              title='Vivamus placerat Luctus Neque nec Faucibus'
            />
          </div>
        </div>

        <div className=' relative group cursor-pointer'>
          <div className='overflow-hidden'>
            <div className=' w-full h-[250px] object-contain group-hover:scale-125 duration-[1500ms] '>
              <img
                src='/assets/images/Latest Post 2.jpg'
                alt='Latest post'
                loading='lazy'
              />
            </div>
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

        <div className=' relative group cursor-pointer'>
          <div className='overflow-hidden'>
            <div className=' w-full h-[250px] object-contain group-hover:scale-125 duration-[1500ms] '>
              <img
                src='/assets/images/Latest Post 3.jpg'
                alt='Latest post'
                loading='lazy'
              />
            </div>
          </div>
          <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 cursor-pointer'>
            <PostCard
              width='292'
              height='168'
              subtitle='Tips'
              title='Vivamus placerat Luctus Neque nec Faucibus'
            />
          </div>
        </div>
      </div>

      <div className=' relative group cursor-pointer'>
        <div className=' overflow-hidden'>
          <div className=' w-full h-[490px] object-fit overflow-hidden group-hover:scale-125 duration-[1500ms] mt-[131px]'>
            <img
              src='/assets/images/Latest Post 4.jpg'
              alt='Latest post'
              loading='lazy'
            />
          </div>
        </div>
        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2'>
          <PostCard
            width='830'
            height='280'
            subtitle='Skin'
            title='Sed dignissim quam nulla, at sodales elit venenatis at. In in  fringilla'
            paragraph='Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis…..'
          />
        </div>
      </div>
    </section>
  )
}

export default LatestPosts
