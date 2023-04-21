import * as request from '../services/requestservice.js'
import { useEffect , useState } from 'react'
import { HomeComp } from './Homecompo.js'
import { Spinner } from './Spinner.js'

export const Main = () =>{
    const [users, setUsers] = useState([])
    const [boolspinner,setboolspinner] = useState(true)

    useEffect(()=> 
    {
        request.get("http://localhost:4000").then((info)=> {setUsers(info);setboolspinner(false)})},[])
            

  
    return(
      <>
      <h1 className='centeredh1'>Registered users:</h1>
      <div className="maincontentdiv">
        
        <ul className='mainuls'>
        {boolspinner && <Spinner/>}

        {users?.length >0 ? users.map(item => <HomeComp email={item.email} key ={item._id}/>) : "No content 😢"}
        </ul>
      </div>
      </>
    )
}

