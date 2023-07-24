import { Link } from 'react-router-dom'
import { getUser } from '../services/requestservice.js'
import {FaHome} from 'react-icons/fa'

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
        <Link to ="/logout">Logout</Link>
        <Link to ="/alloffers">All Offers</Link>

        <Link to ="/create">Create</Link>
        <Link to ="/"><FaHome size={'1.4rem'}/></Link>

        

 
        </>
        : 
        <>
        <Link to ="/login">Login</Link>
        <Link to ="/register">Register</Link>
        <Link to ="/alloffers">All Offers</Link>
        <Link to ="/"><FaHome size={'1.4rem'}/></Link>

        </>
        } 
         
       
       
        
        
        

        </ul>
    </nav>

    )
}