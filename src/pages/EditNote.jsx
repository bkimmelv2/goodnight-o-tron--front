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
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white m-2 p-1 mt-20'
                />
                <br />
                <label for='date'>Date: </label>
                <input 
                    type='text'
                    onChange={handleChange}
                    value={formData.date}
                    name='date'
                    placeholder='(YYYY-MM-DD)'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white m-2 p-1'
                />
                <br />
                <label for='text'>Note: </label>
                <input 
                    type='text'
                    onChange={handleChange}
                    value={formData.text}
                    name='text'
                    placeholder='Add a brief note!'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white m-2 p-1'
                />
                <br />
                <label for='score'>Attention Score (1-5): </label>
                <input 
                    type='number'
                    onChange={handleChange}
                    value={formData.score}
                    name='score'
                    min='1'
                    max='5'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white m-2 p-1'
                />
                <br />
                <input type='submit' value='Update Note' className='m-2 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded cursor-pointer mt-8' />
            </form>
        </div>
    )
}

export default EditNote