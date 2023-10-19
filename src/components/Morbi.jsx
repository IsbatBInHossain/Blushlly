import { icons } from '../lib/data/links'

const Morbi = () => {
  return (
    <div className=' w-full max-w-[1440px] h-auto mt-32 bg-grey-light flex justify-center items-center '>
      <div className=' flex pt-[53px] pb-[53px] gap-8'>
        <div className=' w-[190px] h-[190px] rounded-full overflow-hidden'>
          <img
            src='/assets/images/Morbi Porttitor.jpg'
            alt='Morbi Porttitor'
            className=' w-full h-full object-cover scale-125 object-[center_20%] filter grayscale'
          />
        </div>
        <div className=' flex flex-col justify-start'>
          <h3 className=' font-viadaloka text-4xl leading-[48px]'>
            Morbi Porttitor
          </h3>
          <p className=' w-[72ch] text-xs leading-6'>
            Onvallis porttitor ligula leo a lectus. Donec id venenatis magna.
            Vivamus placerat luctus neque nec faucibus. Aliquam{' '}
            <span className=' font-semibold uppercase'>Gravida</span> eu{' '}
            <span className=' font-semibold uppercase'>Tortor</span> vitae
            tempor. . Mauris{' '}
            <span className=' font-semibold uppercase'>condimentum</span>{' '}
            scelerisque ante nec ultricies. Vivamus tincidunt nibh velit!
          </p>
          <div className=' flex justify-between items-center mt-5'>
            <ul className=' flex justify-between gap-6'>
              {icons.map(icon => (
                <li className=' w-5 h-5 object-contain' key={icon.name}>
                  <img src={icon.path} alt={icon.name} />
                </li>
              ))}
            </ul>
            <p>(85 posts)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Morbi
