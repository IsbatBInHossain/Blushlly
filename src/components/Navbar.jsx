import { icons } from '../lib/data/links'
import Button from './shared/Button'

const Navbar = () => {
  return (
    <nav className=' flex flex-col w-full h-[182px] pl-[165px] pr-[165px] pt-6 max-w-[1440px]'>
      <div className=' flex justify-between items-center'>
        <h2 className=' text-grey-lead font-medium leading-5'>
          Welcome There!
        </h2>
        <div className=' flex items-center'>
          <ul className=' flex gap-3'>
            {icons.map(icon => (
              <li
                key={icon.name}
                className=' w-8 h-8 object-contain border border-primary rounded-full flex justify-center items-center'
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
        <div className='flex items-center gap-14'>
          <h1 className=' font-quinshy text-[56px] leading-[70px]'>Blúshlly</h1>
          <ul className=' flex items-center gap-6 font-medium'>
            <li className=' leading-5'>
              <a href='#' target='_blank' rel='noopener noreferrer'>
                Home
              </a>
            </li>
            <li className=' leading-5'>
              <a href='#' target='_blank' rel='noopener noreferrer'>
                Categories
              </a>
            </li>
            <li className=' leading-5'>
              <a href='#' target='_blank' rel='noopener noreferrer'>
                Makeup
              </a>
            </li>
            <li className=' leading-5'>
              <a href='#' target='_blank' rel='noopener noreferrer'>
                Blog
              </a>
            </li>
            <li className=' leading-5'>
              <a href='#' target='_blank' rel='noopener noreferrer'>
                About
              </a>
            </li>
            <li className=' leading-5'>
              <a href='#' target='_blank' rel='noopener noreferrer'>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className='flex gap-2'>
          <p>Search</p>
          <div className=' w-6 h-6'>
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
