import { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from '../pages/Home'
import Random from '../pages/Random'

const Main = (props) => {
    // Need useState for randomBooks
    const [randomBooks, setRandomBooks] = useState([])
    const navigate = useNavigate()
    // Function to call random link from backend, setRandomBooks to the data
    const getRandomBooks = async () => {
        const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/random/')
        const data = await response.json()
        setRandomBooks(data)
        navigate('/random')
    }

    return (
        <div>
            <h1>Main Placeholder</h1>
            <Routes>
                <Route 
                    path='/'
                    element={<Home getRandomBooks={getRandomBooks}/>}
                />
                <Route 
                    path='/random'
                    element={<Random randomBooks={randomBooks} getRandomBooks={getRandomBooks}/>}
                />
            </Routes>
        </div>
    )
}

export default Main