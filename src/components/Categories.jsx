import CategoryCard from './cards/CategoryCard'

const Categories = () => {
  return (
    <section className=' flex flex-wrap justify-between mt-12 mb-12'>
      <CategoryCard imgSrc='/assets/images/skin.jpg' text='Skin' isSpecial />
      <CategoryCard imgSrc='/assets/images/Latest Post 1.jpg' text='Hair' />
      <CategoryCard imgSrc='/assets/images/Latest Post 3.jpg' text='Makeup' />
      <CategoryCard imgSrc='/assets/images/Tips.jpg' text='Tips' />
      <CategoryCard imgSrc='/assets/images/spa.jpg' text='Spa' />
    </section>
  )
}

export default Categories
