import Book from '../components/Book'

const Random = ({ randomBooks, getRandomBooks }) => {


    return (
        <div>
            <button onClick={getRandomBooks}>GENERATE ZZZ</button>
            {/* Pass Book component with a book prop of book1 or book2 */}
            <Book book={randomBooks[0]}/>
            <Book book={randomBooks[1]}/>
        </div>
    )
}

export default Random