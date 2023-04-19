import { Link } from 'react-router-dom'
import { getUser } from '../services/requestservice.js'

export const Navbar = ()=>{
    const user = getUser()
    console.log(user?.picture);
    
    return(

    <nav className='mainnav'>
        <ul className='mainul'>
        
        
        
        {user 
        ? 
        
        <>
        <img className="detailsimg" src={user?.picture} alt="nothing"/>
        <Link to={`/profile/${user.id}`}>Welcome, {user.email}</Link>
        <Link to ="/">Home</Link>
        <Link to ="/info">Info</Link>
        <Link to ="/logout">Logout</Link> 
        </>
        : 
        <>
        <Link to ="/">Home</Link>
        <Link to ="/login">Login</Link>
        <Link to ="/register">Register</Link>
        </>
        }
        
       
       
        
        
        

        </ul>
    </nav>

    )
}