import PropTypes from 'prop-types'

const NavMenu = ({ isBlack }) => {
  return (
    <div
      className={`flex items-center gap-14 justify-between ${
        isBlack ? 'text-primary' : 'text-white'
      }`}
    >
      <h1 className='font-quinshy text-[56px] leading-[70px] cursor-pointer'>
        Blúshlly
      </h1>
      <ul className='flex items-center gap-6 font-medium'>
        <li className='leading-5'>
          <a href='#'>Home</a>
        </li>
        <li className='leading-5'>
          <a href='#'>Categories</a>
        </li>
        <li className='leading-5'>
          <a href='#'>Makeup</a>
        </li>
        <li className='leading-5'>
          <a href='#'>Blog</a>
        </li>
        <li className='leading-5'>
          <a href='#'>About</a>
        </li>
        <li className='leading-5'>
          <a href='#'>Contact Us</a>
        </li>
      </ul>
    </div>
  )
}

NavMenu.propTypes = {
  isBlack: PropTypes.bool,
}

export default NavMenu
