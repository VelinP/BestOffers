import * as request from '../services/requestservice.js'
import { useEffect , useState } from 'react'
import { HomeComp } from './Homecompo.js'
import { Spinner } from './Spinner.js'
import { Card } from './Card.js'

export const Main = () =>{
    const [three, setThree] = useState([])
    const [boolspinner,setboolspinner] = useState(true)

    useEffect(()=> {request.getthree("http://localhost:4000/alloffers").then((data) => {setThree(data)})},[])
    console.log(three)
    return(
     <div className='homediv'>
        <h1 className='mainheader'>Latest offers</h1>
        <div className='homecarddiv'>
            {three.length>0 ? three?.map( item => <Card info = {item}key ={item._id}/>) : <h1>There are no offers currently</h1>}
        </div>

     </div>
    )
}








{/* <>
<div className="maincontentdiv">
  
  <ul className='mainuls'>
  {boolspinner && <Spinner/>}

  {users?.length >0 ? users.map(item => <HomeComp email={item.email} key ={item._id}/>) : "No content 😢"}
  </ul>
</div>
</> */}

// useEffect(()=> 
// {
//     request.get("http://localhost:4000").then((info)=> {setUsers(info);setboolspinner(false)})},[])
        
