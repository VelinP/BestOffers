import { Link } from 'react-router-dom'
import { getUser } from '../services/requestservice.js'


export const Navbar = (props)=>{
    const user = getUser()


    return(

    <nav className='mainnav'>
        <ul className='mainul'>
        
        
        
         {user 
        ? 
        
        <>
        <img className="detailsimg" src={user?.picture} alt="nothing"/>
        <Link to={`/profile/${user.email}`}>Welcome, {user.email}</Link>
        <Link to ="/">Home</Link>
        <Link to ="/info">Info</Link>
        <Link to ="/logout">Logout</Link>
        <Link to ="/offers">All Offers</Link>
        <Link to ="/create">Create</Link>

 
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