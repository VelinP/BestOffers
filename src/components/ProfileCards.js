import { useParams } from "react-router-dom";
import {useState,useEffect} from 'react';
import * as request from '../services/requestservice.js'
import { Card } from "./Card";
import { Spinner } from "./Spinner";

export const ProfileCards = () =>{
    const {useremail} = useParams()
    const [boolspinner,setboolspinner] = useState(true)

    const [usercards, setCards] = useState({});

    useEffect(()=> {request.get(`http://localhost:4000/profile/${useremail}`).then((data)=> {setCards(data);setboolspinner(false)})},[useremail])
    
    return(
        <div className="profilegriddiv">
        {boolspinner && <Spinner/>}
        {usercards.offers?.map(card => <Card key={card._id} info={card}/>)}
        </div>
    )
}