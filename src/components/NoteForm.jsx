import { useState } from 'react'

const NoteForm = ( { targetBook, getNotes } ) => {
    const [buttonDisabled, setButtonDisabled] = useState(false)

    const nullNote = {
        book: targetBook.fields.title,
        text: '',
        score: 0
    }
    const [formData, setFormData] = useState(nullNote)

    const handleSubmit = async (newNote) => {
        await fetch(process.env.REACT_APP_BACKEND_URL + '/notes/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newNote)
        })
        getNotes()
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

    const handleSubmission = (e) => {
        e.preventDefault()
        setButtonDisabled(true)
        handleSubmit(formData)
    }

    return (
        <div>
            <h4 className='underline'>Add a note!</h4>
            <br />
            <form onSubmit={handleSubmission}>
            <label for='book' className='font-bold'>For Book: </label>
                <input 
                    type='text'
                    onChange={handleChange}
                    name='book'
                    value={formData.book}
                    disabled
                    className='m-2'
                />
                <br />
                <label for='text' className='font-bold'>Note: </label>
                <input 
                    type='text'
                    onChange={handleChange}
                    name='text'
                    placeholder='Leave a brief note!'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white m-2 p-3'
                />
                <br />
                <label for='score' className='font-bold'>Attention Score (1-5): </label>
                <input 
                    type='number'
                    onChange={handleChange}
                    name='score'
                    min='1'
                    max='5'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white m-2 p-1'
                />
                <br />
                <input type='submit' value='Submit Note' disabled={buttonDisabled} className='m-2 bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed' />
            </form>
        </div>
    )
}

export default NoteForm