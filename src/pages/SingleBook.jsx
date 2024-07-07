import { useParams, Link } from 'react-router-dom'

const SingleBook = ({ books, edit }) => {
    const params = useParams()

    const id = parseInt(params.id)
    const book = books.find((book) => {
        return book.id === id
    })

    return (
        <div>
            <h1>{book.title}</h1>
            <img src={book.image} alt={book.title} />
            <br />
            <button onClick={(e) => edit(book)}>Edit Book</button>
        </div>
    )
}

export default SingleBook