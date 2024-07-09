import Book from '../components/Book'
import { Link } from 'react-router-dom'

const AllBooks = ({ books }) => {


    return (
        <div>
            <Link to='/newbook'><button className='mt-12 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded'>Add Book</button></Link>
            <section className='grid grid-cols-3 gap-10 m-10'>
                {books.map((book) => <Book book={book} />)}
            </section>
        </div>
    )
}

export default AllBooks