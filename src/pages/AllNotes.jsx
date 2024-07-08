import Note from '../components/Note'

const AllNotes = ({ notes }) => {


    return (
        <div>
            {notes.map((note) => <Note note={note} />)}
        </div>
    )
}

export default AllNotes