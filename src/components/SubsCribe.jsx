import Button from './shared/Button'

const SubsCribe = () => {
  return (
    <div className=' w-full max-w-[1536px] h-auto mt-20 bg-grey-light flex flex-col pt-[72px] pb-[72px] justify-center items-center text-center'>
      <h2 className=' font-viadaloka text-3xl w-[20%]'>
        Subscribe For Best Beauty Tips
      </h2>
      <div className=' w-[50%] mt-12 relative'>
        <input
          type='text'
          className=' bg-white rounded-full w-full h-[58px] '
        />
        <div className='absolute right-1 top-[3px] h-14'>
          <Button btnText='Subscribe' size='md' />
        </div>
      </div>
      <div className='flex  items-center mt-6'>
        <label className='container'>
          I agree that my submitted data is being collected and stored.
          <input
            type='checkbox'
            className=' absolute opacity-0 cursor-pointer h-0 w-0'
          />
          <span className='checkmark absolute top-0 left-0 h-[18px] w-[18px] border border-primary transform translate-y-[15%] after:absolute after:hidden'></span>
        </label>
      </div>
    </div>
  )
}

export default SubsCribe
