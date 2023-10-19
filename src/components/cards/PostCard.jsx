import PropTypes from 'prop-types'

const PostCard = ({ subtitle, title, width, height, paragraph, size }) => {
  return (
    <div
      className={`${
        size === 'md' ? 'text-left' : 'text-center'
      } border border-primary bg-white z-10 ${
        paragraph && size !== 'md'
          ? 'pt-6 pb-6 pl-[127px] pr-[127px]'
          : size === 'md'
          ? 'pt-[57px] pb-[57px] pl-10 pr-10'
          : 'pt-4 pb-4 pl-12 pr-12'
      }`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div className={`flex flex-col text-primary `}>
        <h3 className=' text-xs uppercase underline leading-[18px] underline-offset-[6px] tracking-[0.2em] mb-2'>
          {subtitle}
        </h3>
        <h2
          className={`${
            paragraph ? ' text-[32px] leading-10' : 'text-2xl leading-7'
          } font-viadaloka ${size == 'md' ? ' mt-3' : ''}`}
        >
          {title}
        </h2>
        {paragraph ? (
          <p
            className={` text-sm ${
              size == 'md' ? ' mt-[14px]' : 'mt-3'
            } leading-5 w-[90%] ${size == 'sm' ? 'pl-8 pr-8 ' : 'w-[85%]'}`}
          >
            {paragraph}
          </p>
        ) : (
          <></>
        )}
        <p
          className={`text-xs leading-[18px] ${
            size == 'md' ? ' mt-8' : 'mt-3'
          } text-grey-iron`}
        >
          By <span className=' font-medium'>Sarfraj Jasim</span> - 29 July, 2023
        </p>
      </div>
    </div>
  )
}

PostCard.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  paragraph: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md']).isRequired,
}

PostCard.defaultProps = {
  size: 'sm',
}

export default PostCard
