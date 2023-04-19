import * as request from '../services/requestservice.js'
import { useEffect , useState } from 'react'
import { HomeComp } from './Homecompo.js'


export const Main = () =>{
    const [users, setUsers] = useState([])
    
    useEffect(()=> 
    {
        request.get("http://localhost:4000").then((info)=> setUsers(info))
    },[])
            

  
    return(
      <>
      <h1 className='centeredh1'>Registered users:</h1>
      <div className="maincontentdiv">
        
        <ul className='mainuls'>
        {users?.length >0 ? users.map(item => <HomeComp email={item.email} key ={item._id}/>) : "No content 😢"}
        </ul>
      </div>
      </>
    )
}

