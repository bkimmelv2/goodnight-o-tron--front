import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EditNote = ({ note, handleSubmit }) => {
    const [formData, setFormData] = useState(note)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmission = (e) => {
        e.preventDefault()
        handleSubmit(formData)
        navigate('/notes')
    }

    return (
        <div>
            <form onSubmit={handleSubmission}>
                <label for='book'>For Book: </label>
                <input 
                    type='text'
                    onChange={handleChange}
                    value={formData.book}
                    name='book'
                    disabled
                />
                <label for='date'>Date: </label>
                <input 
                    type='text'
                    onChange={handleChange}
                    value={formData.date}
                    name='date'
                    placeholder='(YYYY-MM-DD)'
                />
                <label for='text'>Note: </label>
                <input 
                    type='text'
                    onChange={handleChange}
                    value={formData.text}
                    name='text'
                    placeholder='Add a brief note!'
                />
                <label for='score'>Attention Score (1-5): </label>
                <input 
                    type='number'
                    onChange={handleChange}
                    value={formData.score}
                    name='score'
                    min='1'
                    max='5'
                />
                <input type='submit' value='Update Note' />
            </form>
        </div>
    )
}

export default EditNote