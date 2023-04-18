import * as request from '../services/requestservice.js'
import { useEffect , useState } from 'react'


export const Main = () =>{
    const [info, setinfo] = useState("")

    useEffect(()=> 
    {
        request.get("http://localhost:4000").then((info)=> setinfo(info))
    },[])
            
            
    
     
  
    return(
      
      <div className="maincontentdiv">

        <div>{info ? info?.info : "There is no information"}</div>

      </div>
    
    )
}