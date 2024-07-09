import { Link } from 'react-router-dom'

const Book = ({ book }) => {


    return (
        <div className='Book'>
            <Link to={`/books/${book.id}`}>
                <img src={book.image} alt={book.title} className='rounded-lg'/>
            </Link>
            {/* <h3>{book.title}</h3> */}
        </div>
    )
}

export default Book