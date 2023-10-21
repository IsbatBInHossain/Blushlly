import PropTypes from 'prop-types'

const Button = ({ btnText, size }) => {
  return (
    <button
      className={`bg-black ${
        size === 'sm'
          ? 'p-2 pl-4 pr-4 text-medium'
          : size === 'md'
          ? 'p-4 pl-12 pr-12 text-medium'
          : 'p-4 text-lg font-viadaloka'
      } text-white  rounded-full leading-5 w-full hover:bg-grey-ash hover:text-grey-silver duration-500`}
    >
      {btnText}
    </button>
  )
}

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']).isRequired,
}

export default Button
