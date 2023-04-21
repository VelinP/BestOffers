import { getUser } from "../services/requestservice";
import { useParams } from "react-router-dom";
import {useState,useEffect} from 'react';
import * as request from '../services/requestservice.js'
import { Card } from "./Card";

export const ProfileCards = () =>{
    const {user} = getUser()
    const {userId} = useParams()

    const [usercards, setCards] = useState({});

    useEffect(()=> {request.get(`http://localhost:4000/profile/${userId}`).then((data)=> setCards(data))},[userId])
    console.log(usercards)
    
    return(
        <div className="profilegriddiv">
        {usercards.offers?.map(card => <Card key={card._id} info={card}/>)}
        </div>
    )
}