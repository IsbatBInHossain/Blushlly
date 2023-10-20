import { footerData } from '../lib/data/footerData'
import { icons } from '../lib/data/links'
import NavMenu from './shared/NavMenu'

const Footer = () => {
  return (
    <div className=' flex flex-col w-full max-w-[1536px] bg-primary text-white pl-[165px] pt-20 pr-[165px]'>
      <div className=' grid grid-cols-3 grid-rows-1'>
        <div className=' col-span-1 pr-[100px]'>
          <h3 className=' font-viadaloka leading-5 uppercase '>Categories</h3>
          <ul className=' mt-[26px] flex flex-col  '>
            {footerData.categories.map(category => (
              <li key={category.name}>
                <div className=' flex justify-between pt-5 pb-4 items-center font-viadaloka leading-5 border-b border-white'>
                  <h4>{category.name}</h4>
                  <p>({category.postNo})</p>
                </div>
              </li>
            ))}
          </ul>
          <div className='flex gap-2 w-full relative mt-8'>
            <input
              type='text'
              placeholder='Search'
              className=' bg-grey-ash w-full pt-[14px] pb-[14px] pl-4 pr-4 placeholder:text-grey-silver'
            />

            <img
              src='/assets/icons/search-white.svg'
              alt='search'
              aria-description='search button'
              className=' absolute w-6 h-6 top-[14px] right-4'
            />
          </div>
        </div>
        <div className=' col-span-1'>
          <h3 className=' font-viadaloka leading-5 uppercase '>
            Popular Posts
          </h3>
          <div className='flex mt-[47px] flex-col gap-6'>
            <div className='flex gap-4 h-100 overflow-hidden'>
              <div className='w-[100px] h-[100px] p-0'>
                <img
                  src='/assets/images/Popular Post 4.jpg'
                  alt='Popular post'
                  className=' w-full h-full object-cover scale-110'
                />
              </div>
              <div className=' mr-4 flex flex-col gap-4'>
                <h4 className=' font-viadaloka leading-[22px] max-w-[20ch]'>
                  Vivamus placerat Luctus Neque nec Faucibus
                </h4>
                <p className=' text-xs leading-[18px] text-grey-silver'>
                  7 days ago
                </p>
              </div>
            </div>
          </div>
          <div className='flex mt-6 flex-col gap-6'>
            <div className='flex gap-4 h-100 overflow-hidden'>
              <div className='w-[100px] h-[100px] p-0'>
                <img
                  src='/assets/images/Frame4.png'
                  alt='Popular post'
                  className=' w-full h-full object-cover scale-110'
                />
              </div>
              <div className=' mr-4 flex flex-col gap-4'>
                <h4 className=' font-viadaloka leading-[22px] max-w-[20ch]'>
                  Vivamus placerat Luctus Neque nec Faucibus
                </h4>
                <p className=' text-xs leading-[18px] text-grey-silver'>
                  4 days ago
                </p>
              </div>
            </div>
          </div>
          <div className='flex mt-6 flex-col gap-6'>
            <div className='flex gap-4 h-100 overflow-hidden'>
              <div className='w-[100px] h-[100px] p-0'>
                <img
                  src='/assets/images/Tips.jpg'
                  alt='Popular post'
                  className=' w-full h-full object-cover scale-110'
                />
              </div>
              <div className=' mr-4 flex flex-col gap-4'>
                <h4 className=' font-viadaloka leading-[22px] max-w-[20ch]'>
                  Vivamus placerat Luctus Neque nec Faucibus
                </h4>
                <p className=' text-xs leading-[18px] text-grey-silver'>
                  14 days ago
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=' col-span-1 w-[332px]'>
          <h3 className=' font-viadaloka leading-5 uppercase'>Gallery</h3>
          <div className=' grid grid-cols-3 grid-rows-2 gap-4 mt-[47px]'>
            {footerData.gallery.map((imgSrc, index) => (
              <div className=' w-[100px] h-[100px]' key={index}>
                <img
                  src={imgSrc}
                  alt='gallery image'
                  className=' w-full h-full object-cover'
                />
              </div>
            ))}
          </div>
          <h3 className=' font-viadaloka leading-5 uppercase mt-[30px]'>
            Tags
          </h3>
          <div className=' grid grid-cols-4 grid-rows-2 gap-[11px] mt-4'>
            {footerData.tags.map((tag, index) => (
              <button
                key={index}
                className=' w-[75px] h-[29px] bg-grey-ash flex justify-center items-center rounded-full text-grey-silver text-xs leading-[23px]'
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className=' h-px w-full bg-grey-drab mt-14' />
      <div className=' mt-10'>
        <NavMenu />
      </div>
      <div className=' h-px w-full bg-grey-drab mt-10' />
      <div className=' flex justify-between w-full items-center mt-8 mb-8'>
        <ul className=' flex gap-3'>
          {icons.map(icon => (
            <li
              key={icon.name}
              className=' w-8 h-8 object-contain border border-white rounded-full flex justify-center items-center'
            >
              <img
                src={icon.path}
                alt={icon.name}
                className=' w-5 h-5 filter invert'
              />
            </li>
          ))}
        </ul>
        <p className=' leading-6'>© 2023 PostX. Designed By WPXPO</p>
      </div>
    </div>
  )
}

export default Footer
