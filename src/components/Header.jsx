import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <div>
            <h1 className="text-5xl font-bold m-8">Goodnight-o-Tron</h1>
            <nav className='m-5'>
                <Link to='/'><button className='mx-12'>HOME</button></Link>
                <Link to='/books'><button className='mx-12'>LIBRARY</button></Link>
                <Link to='/notes'><button className='mx-12'>ALL NOTES</button></Link>
            </nav>
        </div>
    )
}

export default Header