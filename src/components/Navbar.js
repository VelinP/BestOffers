import { Link } from 'react-router-dom'
import { getUser } from '../services/requestservice.js'


import { useContext } from 'react'
import { authContext } from '../contexts/authcontext'



export const Navbar = (props)=>{
    const user = getUser()


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