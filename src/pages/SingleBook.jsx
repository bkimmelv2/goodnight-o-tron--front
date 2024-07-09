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
        <div className='mb-10'>
            <section className='mt-16 flex justify-center space-x-16 rounded cursor-pointer'>
                <button onClick={(e) => edit(book)} className='bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500'>Edit Book</button>
                <button onClick={(e) => deleteBook(book)} className='bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500'>Delete Book</button>
            </section>
            <br />
            <h1 className='text-2xl font-bold'>{book.title}</h1>
            <br />
            <section className='flex justify-center mx-10'>
                <img src={book.image} alt={book.title} className='rounded-lg' />
            </section>
            <br />
            <section className='grid grid-cols-3 gap-10 m-10'>
                {selectNotes.map((note) => <Note note={note} />)}
            </section>
        </div>
    )
}

export default SingleBook