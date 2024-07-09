import { useParams } from 'react-router-dom'

const SingleNote = ({ notes, edit, deleteNote }) => {
    const params = useParams()

    const id = parseInt(params.id)
    const note = notes.find((note) => {
        return note.id === id
    })

    return (
        <div>
            <section className='mt-16 flex justify-center space-x-16 rounded cursor-pointer'>
                <button onClick={(e) => edit(note)} className='bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500'>Edit</button>
                <button onClick={(e) => deleteNote(note)} className='bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500'>Delete</button>
            </section>
            <br />
            <section className='border-2 rounded-lg border-green-300 inline-block p-10 m-10'>
                <h3 className='font-bold m-2'>For Book: {note.book}</h3>
                <h4 className='underline m-2'>Date: {note.date}</h4>
                <p className='italic m-2'>{note.text}</p>
                <h4 className='text-gray-300 m-2'>Attention Score (1-5): {note.score}</h4>
            </section>
        </div>
    )
}

export default SingleNote