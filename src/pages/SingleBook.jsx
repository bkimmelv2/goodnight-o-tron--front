import { useParams } from 'react-router-dom'
import Note from '../components/Note'

const SingleBook = ({ books, edit, deleteBook, notes }) => {
    const params = useParams()

    const id = parseInt(params.id)
    const book = books.find((book) => {
        return book.id === id
    })

    const selectNotes = notes.filter((note) => note.book === book.title)


    return (
        <div>
            <h1>{book.title}</h1>
            <img src={book.image} alt={book.title} />
            <br />
            <button onClick={(e) => edit(book)}>Edit Book</button>
            <button onClick={(e) => deleteBook(book)}>Delete Book</button>
            {selectNotes.map((note) => <Note note={note} />)}
        </div>
    )
}

export default SingleBook