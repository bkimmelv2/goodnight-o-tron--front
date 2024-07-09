import Book from '../components/Book'
import { Link } from 'react-router-dom'

const AllBooks = ({ books }) => {


    return (
        <div className='grid grid-cols-3 gap-4'>
            {books.map((book) => <Book book={book} />)}
            <br />
            <Link to='/newbook'><button>Add Book</button></Link>
        </div>
    )
}

export default AllBooks