import PropTypes from 'prop-types'

const Button = ({ btnText }) => {
  return (
    <button
      className={` bg-black p-2 pl-4 pr-4 text-white text-medium rounded-full leading-5`}
    >
      {btnText}
    </button>
  )
}

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
}

export default Button
