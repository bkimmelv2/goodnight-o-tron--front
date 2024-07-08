import { useState } from 'react'

const NoteForm = ( { targetBook } ) => {
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
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

    const handleSubmission = async (e) => {
        e.preventDefault()
        setButtonDisabled(true)
        handleSubmit(formData)
    }

    return (
        <div>
            <h4>Add a note!</h4>
            <br />
            <form onSubmit={handleSubmission}>
            <label for='book'>For Book: </label>
                <input 
                    type='text'
                    onChange={handleChange}
                    name='book'
                    value={formData.book}
                    disabled
                />
                <label for='text'>Note: </label>
                <input 
                    type='text'
                    onChange={handleChange}
                    name='text'
                    placeholder='Leave a brief note!'
                />
                <label for='score'>Attention Score (1-5): </label>
                <input 
                    type='number'
                    onChange={handleChange}
                    name='score'
                    min='1'
                    max='5'
                />
                <input type='submit' value='Submit Note' disabled={buttonDisabled} />
            </form>
        </div>
    )
}

export default NoteForm