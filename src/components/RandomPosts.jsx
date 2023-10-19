import RandomPostCard from './cards/RandomPostCard'

const RandomPosts = () => {
  return (
    <section className=' w-full h-fit pl-[165px] mt-16 pr-[165px] max-w-[1440px] flex flex-col'>
      <div className='w-full h-fit object-cover'>
        <img src='/assets/images/Ad 2.jpg' alt='Advertisement' />
      </div>

      <div className=' flex flex-col mt-16'>
        <div className=' flex justify-between items-center'>
          <div className=' h-px w-full bg-primary' />
          <h2 className=' font-viadaloka text-[28px] leading-10 mr-4 ml-4 whitespace-nowrap'>
            Random Posts
          </h2>
          <div className=' h-px w-full bg-primary' />
        </div>

        <div className=' flex flex-col mt-6 gap-12'>
          <RandomPostCard
            subtitle='Makeup'
            title='Sed dignissim quam nulla, at sodales elit venenatis at. In in  fringilla'
            paragraph='Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis…..'
            width='666'
            height='368'
            imgSrc='/assets/images/Random Post 1.jpg'
          />
          <div className=' w-full h-px dashed-border'></div>
          <RandomPostCard
            subtitle='Spa'
            title='Sed dignissim quam nulla, at sodales elit venenatis at. In in  fringilla'
            paragraph='Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis…..'
            width='666'
            height='368'
            imgSrc='/assets/images/Random Post 2.jpg'
            direction='right'
          />
          <div className=' w-full h-px dashed-border'></div>
          <RandomPostCard
            subtitle='Makeup'
            title='Sed dignissim quam nulla, at sodales elit venenatis at. In in  fringilla'
            paragraph='Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis…..'
            width='666'
            height='368'
            imgSrc='/assets/images/Random Post 3.jpg'
            flipped
          />
          <div className=' w-full h-px dashed-border'></div>
          <RandomPostCard
            subtitle='Makeup'
            title='Sed dignissim quam nulla, at sodales elit venenatis at. In in  fringilla'
            paragraph='Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis…..'
            width='666'
            height='368'
            imgSrc='/assets/images/Random Post 4.jpg'
            direction='right'
          />
          <div className=' w-full h-px dashed-border'></div>
          <RandomPostCard
            subtitle='Tips'
            title='Sed dignissim quam nulla, at sodales elit venenatis at. In in  fringilla'
            paragraph='Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis…..'
            width='666'
            height='368'
            imgSrc='/assets/images/Random Post 5.jpg'
          />
          <div className=' w-full h-px dashed-border'></div>
          <RandomPostCard
            subtitle='Makeup'
            title='Sed dignissim quam nulla, at sodales elit venenatis at. In in  fringilla'
            paragraph='Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis…..'
            width='666'
            height='368'
            imgSrc='/assets/images/Random Post 6.jpg'
            direction='right'
          />
          <div className=' w-full h-px dashed-border'></div>
        </div>
      </div>
      <button className='bg-black mt-16 ml-auto mr-auto p-4 pl-12 pr-12 text-white text-medium rounded-full leading-5'>
        Load More
      </button>
    </section>
  )
}

export default RandomPosts
