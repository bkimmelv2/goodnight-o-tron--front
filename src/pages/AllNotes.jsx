import Note from '../components/Note'

const AllNotes = ({ notes }) => {

    return (
        <div className='grid grid-cols-3 gap-10 mt-16 m-10'>
            {notes.map((note) => <Note note={note} />)}
        </div>
    )
}

export default AllNotes