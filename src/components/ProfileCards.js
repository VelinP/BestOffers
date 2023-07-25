import { useParams } from "react-router-dom";
import {useState,useEffect} from 'react';
import * as request from '../services/requestservice.js'
import { Card } from "./Card";
import { Spinner } from "./Spinner";
import { AlloffersRow } from "./AlloffersRow.js";

export const ProfileCards = () =>{
    const {useremail} = useParams()
    const [boolspinner,setboolspinner] = useState(true)

    const [usercards, setCards] = useState({});

    useEffect(()=> {request.get(`http://localhost:4000/profile/${useremail}`).then((data)=> {setCards(data);setboolspinner(false)})},[useremail])
    
    return(
        <>
        
        {
        
        usercards?.offers?.length > 0 
        ?
        <div className="profilegriddiv">
            {boolspinner && <Spinner/>}
            {usercards?.offers?.map(card => <AlloffersRow key={card._id} info={card}/>)}
        </div>

        :
        <div className='alloffersnoffers'> <h1>User has not made any offers yet</h1> </div>

        }
        
        </>
        
    )
}

// {offers?.alloffers?.length > 0 ? 
//     <div className="profilegriddiv">
        
//     {offers?.alloffers?.map(card => <AlloffersRow info = {card}key ={card._id}/>) }
//     </div>
//     :
//     <div className='alloffersnoffers'> <h1>No offers currently</h1> </div>
//     }

// <div className="profilegriddiv">
//         {boolspinner && <Spinner/>}
//         {usercards?.offers?.map(card => <AlloffersRow key={card._id} info={card}/>)}
//         </div>