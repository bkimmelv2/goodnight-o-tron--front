import { Link } from 'react-router-dom'

const Note = ({ note }) => {


    return (
        <Link to={`/notes/${note.id}`}>
        <div className='border-2 rounded-lg border-green-300 p-5'>
            <h4 className='font-bold'>For Book: {note.book}</h4>
            <h4 className='underline'>Date: {note.date}</h4>
            <p className='italic'>{note.text}</p>
            <h4 className='text-gray-300'>Attention Score (1-5): {note.score}</h4>
        </div>
        </Link>
    )
}

export default Note