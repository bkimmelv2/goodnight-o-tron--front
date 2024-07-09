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
                <label for='title'>Book Title: </label>
                <input 
                    type='text'
                    onChange={handleChange}
                    value={formData.title}
                    name='title'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white m-2 p-1 mt-20'
                />
                <br />
                <label for='image'>Image URL: </label>
                <input 
                    type='text'
                    onChange={handleChange}
                    value={formData.image}
                    name='image'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white m-2 p-1'
                />
                <br />
                <input type='submit' value={buttonLabel} className='m-2 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded cursor-pointer mt-8' />
            </form>
        </div>
    )
}

export default BookForm