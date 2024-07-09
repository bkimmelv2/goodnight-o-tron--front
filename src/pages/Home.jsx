import { useEffect } from 'react'

const Home = ({ getRandomBooks, getNotes }) => {
    useEffect(() => {
        getNotes()
    })

    return (
        <div>
            <button onClick={getRandomBooks} className='bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded mt-60'>GENERATE ZZZ's</button>
        </div>
    )
}

export default Home