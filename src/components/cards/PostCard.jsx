import PropTypes from 'prop-types'

const PostCard = ({ subtitle, title, width, height, paragraph }) => {
  return (
    <div
      className={`text-center border border-primary bg-white z-10 ${
        paragraph ? 'pt-6 pb-6 pl-[127px] pr-[127px]' : 'pt-4 pb-4 pl-12 pr-12'
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
          } font-viadaloka `}
        >
          {title}
        </h2>
        {paragraph ? (
          <p className=' text-sm mt-3 pl-8 pr-8 leading-5'>{paragraph}</p>
        ) : (
          <></>
        )}
        <p className=' text-xs leading-[18px] mt-4 text-grey-iron'>
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
}

export default PostCard
