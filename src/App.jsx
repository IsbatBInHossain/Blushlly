import Featured from './components/Featured'
import Footer from './components/Footer'
import InstaFeed from './components/InstaFeed'
import Morbi from './components/Morbi'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import RandomPosts from './components/RandomPosts'
import SubsCribe from './components/SubsCribe'

export default function App() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Navbar />
      <Carousel />
      <Featured />
      <Morbi />
      <RandomPosts />
      <InstaFeed />
      <SubsCribe />
      <Footer />
    </div>
  )
}
