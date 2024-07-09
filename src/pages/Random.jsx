import NoteForm from '../components/NoteForm'
import RandomBook from '../components/RandomBook'

const Random = ({ randomBooks, getNotes }) => {


    return (
        <div>
            <h3>Return HOME to try again!</h3>
            {/* Pass Book component with a book prop of book1 or book2 */}
            <section className='grid grid-cols-2 gap-4'>
                <RandomBook book={randomBooks[0]}/>
                <RandomBook book={randomBooks[1]} />
                <NoteForm targetBook={randomBooks[0]} getNotes={getNotes} />
                <NoteForm targetBook={randomBooks[1]} getNotes={getNotes} />
            </section>
        </div>
    )
}

export default Random