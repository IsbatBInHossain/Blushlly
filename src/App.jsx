import Featured from './components/Featured'
import Navbar from './components/Navbar'
import Pagination from './components/Pagination'

export default function App() {
  return (
    <div className='flex flex-col items-center'>
      <Navbar />
      <Pagination />
      <Featured />
    </div>
  )
}
