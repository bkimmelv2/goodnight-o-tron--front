import { Link } from 'react-router-dom'

const Book = ({ book }) => {

    return (
        <div>
            <img src={book.fields.image} alt={book.fields.title} />
            {/* ADD A LINK HERE LATER TO SHOW PAGE */}
            <h3>{book.fields.title}</h3>
        </div>
    )
}

export default Book