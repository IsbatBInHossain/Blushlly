import PropTypes from 'prop-types'

const NavMenu = ({ isBlack }) => {
  return (
    <div
      className={`flex items-center gap-14 justify-between ${
        isBlack ? 'text-primary' : 'text-white'
      }`}
    >
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
  )
}

NavMenu.propTypes = {
  isBlack: PropTypes.bool,
}

export default NavMenu
