import { useEffect } from 'react'

const Home = ({ getRandomBooks, getNotes }) => {
    useEffect(() => {
        getNotes()
    })

    return (
        <div>
            <button onClick={getRandomBooks}>GENERATE ZZZ's</button>
        </div>
    )
}

export default Home