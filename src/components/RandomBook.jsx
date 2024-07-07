

const RandomBook = ({ book }) => {

    return (
        <div className='Book'>
            <img src={book.fields.image} alt={book.fields.title} />
            <h3>{book.fields.title}</h3>
        </div>
    )
}

export default RandomBook