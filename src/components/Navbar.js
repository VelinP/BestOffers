import { Link } from 'react-router-dom'

export const Navbar = ()=>{
    return(

    <nav className='mainnav'>
        <ul className='mainul'>
        <Link to ="/">Home</Link>
        <Link to ="/register">Register</Link>
        <Link to ="/info">Info</Link>
        <Link to ="/login">Login</Link>
        <Link to ="/logout">Logout</Link>

        </ul>
    </nav>

    )
}