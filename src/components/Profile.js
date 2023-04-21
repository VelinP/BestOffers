import { useParams } from "react-router-dom";
import { getUser } from "../services/requestservice";
import { useState, useEffect } from "react";
import * as request from '../services/requestservice.js'
import { Card } from "./Card";

export const Profile = () =>{
    const {user} = getUser()
    const {userId} = useParams()

    const [usercards, setCards] = useState({});

    useEffect(()=> {request.get(`http://localhost:4000/profile/${userId}`).then((data)=> setCards(data))},[userId])
    console.log(usercards.email)

    return (
         <>
        <h1 className="profileh1">Welcome, {usercards.email}</h1>
        <div className="profilegriddiv">
            {usercards.offers?.map(card => <Card key={card._id} info={card}/>)}
        </div>
        </>

    )
}