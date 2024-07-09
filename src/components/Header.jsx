import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">Goodnight-o-Tron</h1>
            <nav>
                <Link to='/'><button>HOME</button></Link>
                <Link to='/books'><button>LIBRARY</button></Link>
                <Link to='/notes'><button>ALL NOTES</button></Link>
            </nav>
        </div>
    )
}

export default Header