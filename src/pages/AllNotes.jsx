import Note from '../components/Note'

const AllNotes = ({ notes }) => {

    return (
        <div className='grid grid-cols-3 gap-4'>
            {notes.map((note) => <Note note={note} />)}
        </div>
    )
}

export default AllNotes