import { Link } from 'react-router-dom'

const Note = ({ note }) => {


    return (
        <Link to={`/notes/${note.id}`}>
        <div className='Note'>
            <h4>For Book: {note.book}</h4>
            <h4>Date: {note.date}</h4>
            <p>{note.text}</p>
            <h4>Attention Score (1-5): {note.score}</h4>
        </div>
        </Link>
    )
}

export default Note