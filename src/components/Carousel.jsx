import { useState } from 'react'

import Card from './cards/Card'
import { carouselData } from '../lib/data/carouselData'

const Carousel = () => {
  const [imageNo, setimageNo] = useState(0)

  const handleBgChange = x => {
    let num = imageNo
    num += x
    if (num > 3) num = 0
    if (num < 0) num = 3
    setimageNo(num)
  }

  let cardClass

  if (imageNo === 0 || imageNo === 2) {
    cardClass = 'top-[117px] right-[258px]'
  } else {
    cardClass = 'top-[117px] right-[258px] transform -translate-x-[500px]'
  }

  return (
    <section
      className=' w-full h-[560px] max-w-[1536px] relative bg-cover bg-no-repeat bg-center group duration-500'
      style={{ backgroundImage: `url(${carouselData[imageNo].url})` }}
    >
      <div className={`absolute ${cardClass} duration-700`}>
        <Card
          subtitle={carouselData[imageNo].subtitle}
          title={carouselData[imageNo].title}
          width='480'
          isWhite={imageNo === 2 || imageNo === 3}
        />
      </div>
      <div className=' pl-[104px] pr-[104px] w-full h-full flex justify-between items-center z-10 duration-300 opacity-30 group-hover:opacity-100'>
        <img
          src='/assets/icons/back.svg'
          alt='back'
          className=' w-12 h-12 cursor-pointer'
          onClick={() => handleBgChange(-1)}
        />
        <img
          src='/assets/icons/forward.svg'
          alt='forward'
          className=' w-12 h-12 cursor-pointer'
          onClick={() => handleBgChange(1)}
        />
      </div>
      <div
        className={`absolute flex justify-center duration-500 items-center gap-4 bottom-10 left-1/2 -translate-x-1/2`}
      >
        <div
          className={`w-6 h-6 rounded-full ${
            imageNo == 0 ? 'opacity-100' : 'opacity-30'
          } ${imageNo == 3 ? ' bg-black' : 'bg-white'}`}
        />
        <div
          className={` w-6 h-6 rounded-full ${
            imageNo == 1 ? 'opacity-100' : 'opacity-30'
          } ${imageNo == 3 ? ' bg-black' : 'bg-white'}`}
        />
        <div
          className={` w-6 h-6 rounded-full ${
            imageNo == 2 ? 'opacity-100' : 'opacity-30'
          } ${imageNo == 3 ? ' bg-black' : 'bg-white'}`}
        />
        <div
          className={` w-6 h-6 rounded-full ${
            imageNo == 3 ? 'opacity-80 bg-black' : 'opacity-30 bg-white'
          }`}
        />
      </div>
    </section>
  )
}

export default Carousel
