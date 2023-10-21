import Button from './shared/Button'

const InstaFeed = () => {
  return (
    <section className='w-full h-fit pl-[165px] mt-16 pr-[165px] max-w-[1440px] flex flex-col'>
      <div className=' flex justify-between items-center'>
        <div className=' h-px w-full bg-primary' />
        <h2 className=' font-viadaloka text-[28px] leading-10 mr-4 ml-4 whitespace-nowrap'>
          Instagram Feed
        </h2>
        <div className=' h-px w-full bg-primary' />
      </div>
      <div className=' flex justify-between mt-6'>
        <div className=' w-[260px] h-[260px]'>
          <img
            src='/assets/images/Popular Post 3.jpg'
            alt='instagram photo'
            className=' w-full h-full object-cover hover:scale-110 duration-1000 cursor-pointer'
            loading='lazy'
          />
        </div>
        <div className=' w-[260px] h-[260px]'>
          <img
            src='/assets/images/Popular Post 4.jpg'
            alt='instagram photo'
            className=' w-full h-full object-cover hover:scale-110 duration-1000 cursor-pointer'
            loading='lazy'
          />
        </div>
        <div className=' w-[260px] h-[260px]'>
          <img
            src='/assets/images/Tips.jpg'
            alt='instagram photo'
            className=' w-full h-full object-cover hover:scale-110 duration-1000 cursor-pointer'
            loading='lazy'
          />
        </div>
        <div className=' w-[260px] h-[260px]'>
          <img
            src='/assets/images/Frame4.png'
            alt='instagram photo'
            className=' w-full h-full object-cover hover:scale-110 duration-1000 cursor-pointer'
            loading='lazy'
          />
        </div>
      </div>
      <div className=' mt-12 w-full inline-block'>
        <Button btnText='Follow Us' size='lg' />
      </div>
    </section>
  )
}

export default InstaFeed
