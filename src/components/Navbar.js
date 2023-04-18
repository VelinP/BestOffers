import { Link } from 'react-router-dom'

export const Navbar = ()=>{
    return(

    <nav className='mainnav'>
        <ul className='mainul'>
        <Link to href="/">Home</Link>
        <Link to href="/info">Info</Link>
        <Link to href="/login">Login</Link>
        <Link to href="/logout">Logout</Link>

        </ul>
    </nav>

    )
}