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
            <br />
            <button onClick={(e) => edit(book)}>Edit Book</button>
            <button onClick={(e) => deleteBook(book)}>Delete Book</button>
            <br />
            <img src={book.image} alt={book.title} />
            <br />
            <section>
                {selectNotes.map((note) => <Note note={note} />)}
            </section>
        </div>
    )
}

export default SingleBook