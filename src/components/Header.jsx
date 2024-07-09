import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <div>
            <h1 className="text-5xl font-bold m-8 bg-purple-500 p-2 w-auto inline-block rounded-md">Goodnight-o-Tron</h1>
            <nav className='m-3 flex space-x-20 justify-center'>
                <Link to='/'><button className='bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded'>HOME</button></Link>
                <Link to='/books'><button className='bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded'>LIBRARY</button></Link>
                <Link to='/notes'><button className='bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded'>ALL NOTES</button></Link>
            </nav>
        </div>
    )
}

export default Header