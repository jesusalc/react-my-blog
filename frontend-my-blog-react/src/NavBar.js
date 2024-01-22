import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <Link to='/'>Home</Link>
            </ul>
            <ul>
                <Link to='/about'>About</Link>
            </ul>
            <ul>
                <Link to='/articles'>articles</Link>
            </ul>
        </nav>
    )
}

export default NavBar