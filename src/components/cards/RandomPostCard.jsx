import PropTypes from 'prop-types'
import PostCard from './PostCard'

const RandomPostCard = ({
  subtitle,
  title,
  paragraph,
  width,
  height,
  imgSrc,
  direction,
  flipped,
}) => {
  return (
    <div
      className={`flex h-[496px] ${
        direction == 'right' ? 'flex-row-reverse' : ''
      }`}
    >
      <div className=' w-1/2'>
        <img
          src={imgSrc}
          alt='Random Post'
          className={`w-full h-full object-cover ${
            flipped ? ' transform scale-x-[-1]' : ''
          }`}
        />
      </div>
      <div className=' w-1/2 bg-white relative'>
        <div
          className={`absolute z-10 top-1/2 -translate-y-1/2 ${
            direction == 'right' ? 'left-0' : 'right-0'
          }`}
        >
          <PostCard
            subtitle={subtitle}
            title={title}
            paragraph={paragraph}
            width={width}
            height={height}
            size='md'
          />
        </div>
      </div>
    </div>
  )
}

RandomPostCard.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  paragraph: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  flipped: PropTypes.bool,
}

RandomPostCard.defaultProps = {
  direction: 'left',
  flipped: false,
}

export default RandomPostCard
