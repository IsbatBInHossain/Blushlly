import Featured from './components/Featured'
import Footer from './components/Footer'
import InstaFeed from './components/InstaFeed'
import Morbi from './components/Morbi'
import Navbar from './components/Navbar'
import Pagination from './components/Pagination'
import RandomPosts from './components/RandomPosts'
import SubsCribe from './components/SubsCribe'

export default function App() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Navbar />
      <Pagination />
      <Featured />
      <Morbi />
      <RandomPosts />
      <InstaFeed />
      <SubsCribe />
      <Footer />
    </div>
  )
}
