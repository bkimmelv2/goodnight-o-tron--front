import RandomBook from '../components/RandomBook'

const Random = ({ randomBooks, getRandomBooks }) => {


    return (
        <div>
            <button onClick={getRandomBooks}>GENERATE ZZZ</button>
            {/* Pass Book component with a book prop of book1 or book2 */}
            <RandomBook book={randomBooks[0]}/>
            <RandomBook book={randomBooks[1]}/>
        </div>
    )
}

export default Random