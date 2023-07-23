import { useEffect, useState } from "react"
import * as request from "../services/requestservice"
import { Card } from "./Card"

export const AllOffers = () =>{
    
    const [offers, setoffers] = useState([])
    useEffect(()=> {request.get("http://localhost:4000/alloffers").then((data) => {setoffers(data)})},[])
    return (

        <>
        
        
            
        {offers.alloffers?.length > 0 ? 
        <div className="profilegriddiv">
            
        {offers.alloffers?.map(card => <Card info = {card}key ={card._id}/>) }
        </div>
        :
        <div className='alloffersnoffers'> <h1>No offers currently</h1> </div>
        }

        
        </>


    )
}

