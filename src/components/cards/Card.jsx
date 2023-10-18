import PropTypes from 'prop-types'

const Card = ({ subtitle, title, width }) => {
  return (
    <div
      className={`text-left border border-white pl-14 pr-14 pt-10 pb-10 z-10 h-fit`}
      style={{ width: `${width}px` }}
    >
      <div className={`flex flex-col text-white `}>
        <h3 className=' text-xs uppercase underline leading-[18px] tracking-[16%] mb-4'>
          {subtitle}
        </h3>
        <h2 className=' text-[32px] font-viadaloka leading-10'>{title}</h2>
        <p className=' text-xs leading-5 mt-4'>
          By <span className=' font-medium'>Sarfraj Jasim</span> - 29 July, 2023
        </p>
        <p className=' text-xs leading-5 mt-6'>Continue Reading ➡️</p>
        <div className=' w-[130px] mt-4 h-px bg-white'></div>
      </div>
    </div>
  )
}

Card.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
}

export default Card
