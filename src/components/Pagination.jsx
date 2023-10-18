import Card from './shared/Card'

const Pagination = () => {
  return (
    <section className=' w-full h-[560px] mirror-background max-w-[1440px]'>
      <div className=' absolute top-[117px] right-[258px]'>
        <Card
          textAlign='left'
          subtitle='skin'
          title='Six Hyaluronic Serums For Glowing Summer Skin Vivamus Placerat'
          width='480'
        />
      </div>
      <div className=' pl-[104px] pr-[104px] w-full h-full flex justify-between items-center z-10'>
        <img src='/assets/icons/back.svg' alt='back' className=' w-12 h-12' />
        <img
          src='/assets/icons/forward.svg'
          alt='back'
          className=' w-12 h-12'
        />
      </div>
    </section>
  )
}

export default Pagination
