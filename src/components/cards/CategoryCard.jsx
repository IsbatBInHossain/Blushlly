import PropTypes from 'prop-types'

const CategoryCard = ({ imgSrc, text, isSpecial }) => {
  return (
    <div className='w-[198px] group h-[150px] relative overflow-hidden cursor-pointer'>
      <img
        src={imgSrc}
        alt={text}
        loading='lazy'
        className={`object-cover h-full w-full  transition-transform duration-700 ${
          isSpecial
            ? ' scale-[1.2] group-hover:scale-125'
            : 'group-hover:scale-110'
        }`}
      />
      <button className='pb-2 pt-2 pl-6 pr-6 uppercase text-white group-hover:bg-grey-silver group-hover:text-primary group-hover:border-none text-xs z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-white border rounded-full'>
        {text}
      </button>
      <div className='absolute w-full h-full bg-primary top-0 left-0 opacity-60 transition-opacity duration-700 group-hover:opacity-0' />
    </div>
  )
}

CategoryCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isSpecial: PropTypes.bool,
}

CategoryCard.defaultProps = {
  isSpecial: false,
}

export default CategoryCard
