import { useState } from 'react'
import { icons } from '../lib/data/links'
import Button from './shared/Button'
import NavMenu from './shared/NavMenu'

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const handleSearchOpen = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  return (
    <nav className=' flex flex-col w-full h-[182px] pl-[165px] pr-[165px] pt-6 max-w-[1536px]'>
      <div className=' flex justify-between items-center'>
        <h2 className=' text-grey-lead font-medium leading-5 cursor-default'>
          Welcome There!
        </h2>
        <div className=' flex items-center'>
          <ul className=' flex gap-3'>
            {icons.map(icon => (
              <li
                key={icon.name}
                className=' w-8 h-8 object-contain border border-primary rounded-full flex justify-center items-center hover:fliter hover:invert hover:bg-[#e5e5e5] cursor-pointer duration-500'
              >
                <img src={icon.path} alt={icon.name} className=' w-5 h-5' />
              </li>
            ))}
          </ul>
          <div className=' w-[2px] h-9 bg-grey-light ml-6 mr-6' />
          <Button btnText={'Subscribe'} size='sm' />
        </div>
      </div>
      <div className=' w-full h-px bg-grey-light mt-6 mb-4' />
      <div className='flex justify-between items-center'>
        <NavMenu isBlack />
        <div className='flex gap-2 relative'>
          {!isSearchOpen && (
            <p className=' select-none cursor-default'>Search</p>
          )}
          {isSearchOpen && (
            <input
              type='text'
              placeholder='Search'
              className=' bg-grey-silver w-[200px] h-[40px] animate-fade-left animate-once animate-duration-500 animate-delay-100 rounded-lg absolute -top-[10px] -left-[208px] pt-[14px] pb-[14px] pl-4 pr-4 placeholder:text-grey-ash focus:outline-none'
            />
          )}
          <div className=' w-6 h-6 cursor-pointer' onClick={handleSearchOpen}>
            <img
              src='/assets/icons/search.svg'
              alt='search'
              aria-description='search button'
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
