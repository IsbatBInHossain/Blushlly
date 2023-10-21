import PropTypes from 'prop-types'

const Card = ({ subtitle, title, width, isWhite }) => {
  return (
    <div
      className={`text-left border relative ${
        isWhite ? 'border-none' : 'border-white'
      } pl-14 pr-14 pt-10 pb-10 z-10 h-fit`}
      style={{ width: `${width}px` }}
    >
      <div className={`flex flex-col text-white `}>
        <h3 className=' text-xs uppercase underline underline-offset-[6px] leading-[18px] tracking-[0.2em] mb-4 z-10'>
          {subtitle}
        </h3>
        <h2 className=' text-[32px] font-viadaloka leading-10 z-10'>{title}</h2>
        <p className=' text-xs leading-5 mt-4 z-10'>
          By <span className=' font-medium'>Sarfraj Jasim</span> - 29 July, 2023
        </p>
        <p className=' text-xs leading-5 mt-6 z-10'>Continue Reading ➡️</p>
        <div className=' w-[130px] mt-4 h-px bg-white z-10' />
      </div>
      {isWhite && (
        <div className='absolute w-full h-full bg-primary top-0 left-0 opacity-60 transition-opacity duration-700 ' />
      )}
    </div>
  )
}

Card.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  isWhite: PropTypes.bool.isRequired,
}

export default Card
