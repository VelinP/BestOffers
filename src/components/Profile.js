import { useParams } from "react-router-dom";
import { getUser } from "../services/requestservice";
import { useState, useEffect } from "react";
import * as request from '../services/requestservice.js'
import { Card } from "./Card";
import { Link } from "react-router-dom";

export const Profile = () =>{
    const {user} = getUser()
    const {userId} = useParams()

    const [usercards, setCards] = useState({});

    useEffect(()=> {request.get(`http://localhost:4000/profile/${userId}`).then((data)=> setCards(data))},[userId])
    console.log(usercards)

    return (
        <>
        <p className="profileh1">Welcome, {usercards.email}</p>

        <div className="profilediv">
        <img className="profileimg" src={usercards.picture} alt="nothing"/>
        <ul className="profileul">
            <Link className="profileLink" to={`/profile/${usercards.userId}/settings`}>Profile Settings</Link>
            <Link className="profileLink" to={`/profile/${usercards.userId}/offers`}>Your Offers</Link>

        </ul>
        </div>
        </>

    )
}


{/* <div className="profilegriddiv">
    {usercards.offers?.map(card => <Card key={card._id} info={card}/>)}
</div> */}