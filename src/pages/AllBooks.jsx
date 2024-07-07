import Book from '../components/Book'
import { Link } from 'react-router-dom'

const AllBooks = ({ books }) => {


    return (
        <div>
            {books.map((book) => <Book book={book} />)}
            <br />
            <Link to='/newbook'><button>Add Book</button></Link>
        </div>
    )
}

export default AllBooks