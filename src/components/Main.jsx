import { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from '../pages/Home'
import Random from '../pages/Random'
import AllBooks from '../pages/AllBooks'
import SingleBook from '../pages/SingleBook'
import BookForm from '../pages/BookForm'
import AllNotes from '../pages/AllNotes'
import SingleNote from '../pages/SingleNote'
import EditNote from '../pages/EditNote'


const Main = (props) => {
    // VARIABLES //
    const url = process.env.REACT_APP_BACKEND_URL
    const nullBook = {
        title: '',
        image: ''
    }
    const [targetBook, setTargetBook] = useState(nullBook)

    // RANDOM FUNCTION //
    // Need useState for randomBooks
    const [randomBooks, setRandomBooks] = useState([])
    const navigate = useNavigate()
    // Function to call random link from backend, setRandomBooks to the data
    const getRandomBooks = async () => {
        const response = await fetch(url + '/random/')
        const data = await response.json()
        setRandomBooks(data)
        navigate('/random')
    }

    // GET ALL BOOKS FUNCTION //
    const [books, setBooks] = useState([])
    const getBooks = async () => {
        const response = await fetch(url + '/books/')
        const data = await response.json()
        setBooks(data)
    }

    // GET ALL NOTES FUNCTION //
    const [notes, setNotes] = useState([])
    const getNotes = async () => {
        const response = await fetch(url + '/notes/')
        const data = await response.json()
        setNotes(data)
    }

    // CREATE BOOK FUNCTION //
    const createBook = async (newBook) => {
        await fetch(url + '/books/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBook)
        })

        getBooks()
    }

    // Get Targeted Book for Editing //
    const getTargetBook = (book) => {
        setTargetBook(book)
        navigate('/editbook')
    }

    // Get Targeted Note for Editing //
    const [targetNote, setTargetNote] = useState(null)
    const getTargetNote = (note) => {
        setTargetNote(note)
        navigate('/editnote')
    }

    // Update Book //
    const updateBook = async (book) => {
        await fetch(url + `/books/${book.id}/`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book)
        })

        getBooks()
    }

    // Update Note //
    const updateNote = async (note) => {
        await fetch(url + `/notes/${note.id}/`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note)
        })

        getNotes()
    }

    // Delete Book //
    const deleteBook = async (book) => {
        await fetch(url + `/books/${book.id}/`, {
            method: 'delete'
        })

        getBooks()
        navigate('/books')
    }

    // Delete Note //
    const deleteNote = async (note) => {
        await fetch(url + `/notes/${note.id}/`, {
            method: 'delete'
        })

        getNotes()
        navigate('/notes')
    }

    // useEffect //
    // const fetchBoth = async () => {
    //     await getBooks()
    //     await getNotes()
    // }
    useEffect(() => {
        getBooks()
    })

    return (
        <div>
            <Routes>
                <Route 
                    path='/'
                    element={<Home getRandomBooks={getRandomBooks} getNotes={getNotes} />}
                />
                <Route 
                    path='/random'
                    element={<Random randomBooks={randomBooks} getNotes={getNotes} />}
                />
                <Route 
                    path='/books'
                    element={<AllBooks books={books} />}
                />
                <Route 
                    path='/books/:id'
                    element={<SingleBook books={books} edit={getTargetBook} deleteBook={deleteBook} notes={notes} />}
                />
                <Route 
                    path='/newbook'
                    element={<BookForm initialBook={nullBook} handleSubmit={createBook} buttonLabel='Create Book' />}
                />
                <Route 
                    path='/editbook'
                    element={<BookForm initialBook={targetBook} handleSubmit={updateBook} buttonLabel='Update Book' />}
                />
                <Route 
                    path='/notes'
                    element={<AllNotes notes={notes} />}
                />
                <Route 
                    path='/notes/:id'
                    element={<SingleNote notes={notes} edit={getTargetNote} deleteNote={deleteNote} />}
                />
                <Route 
                    path='/editnote'
                    element={<EditNote note={targetNote} handleSubmit={updateNote} />}
                />
            </Routes>
        </div>
    )
}

export default Main