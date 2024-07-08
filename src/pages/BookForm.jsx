import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BookForm = ({ initialBook, handleSubmit, buttonLabel }) => {
    const [formData, setFormData] = useState(initialBook)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmission = (e) => {
        e.preventDefault()
        handleSubmit(formData)
        navigate('/books')
    }

    return (
        <div>
            <form onSubmit={handleSubmission}>
                <input 
                    type='text'
                    onChange={handleChange}
                    value={formData.title}
                    name='title'
                    placeholder='Book Title'
                />
                <input 
                    type='text'
                    onChange={handleChange}
                    value={formData.image}
                    name='image'
                    placeholder='Book Image URL'
                />
                <input type='submit' value={buttonLabel} />
            </form>
        </div>
    )
}

export default BookForm