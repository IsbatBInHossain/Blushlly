import Featured from './components/Featured'
import Morbi from './components/Morbi'
import Navbar from './components/Navbar'
import Pagination from './components/Pagination'
import RandomPosts from './components/RandomPosts'

export default function App() {
  return (
    <div className='flex flex-col items-center'>
      <Navbar />
      <Pagination />
      <Featured />
      <Morbi />
      <RandomPosts />
    </div>
  )
}
