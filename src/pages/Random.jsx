import NoteForm from '../components/NoteForm'
import RandomBook from '../components/RandomBook'

const Random = ({ randomBooks, getNotes }) => {


    return (
        <div>
            <h3>Return HOME to try again!</h3>
            {/* Pass Book component with a book prop of book1 or book2 */}
            <RandomBook book={randomBooks[0]}/>
            <NoteForm targetBook={randomBooks[0]} getNotes={getNotes} />
            <RandomBook book={randomBooks[1]} />
            <NoteForm targetBook={randomBooks[1]} getNotes={getNotes} />
        </div>
    )
}

export default Random