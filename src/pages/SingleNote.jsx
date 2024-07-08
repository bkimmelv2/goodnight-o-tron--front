import { useParams } from 'react-router-dom'

const SingleNote = ({ notes, edit, deleteNote }) => {
    const params = useParams()

    const id = parseInt(params.id)
    const note = notes.find((note) => {
        return note.id === id
    })

    return (
        <div>
            <h3>For Book: {note.book}</h3>
            <h4>Date: {note.date}</h4>
            <p>Note: {note.text}</p>
            <h4>Attention Score (1-5): {note.score}</h4>
            <br />
            <button onClick={(e) => edit(note)}>Edit</button>
            <button onClick={(e) => deleteNote(note)}>Delete</button>
        </div>
    )
}

export default SingleNote