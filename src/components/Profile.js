import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as request from '../services/requestservice.js'
import { Link } from "react-router-dom";
import { Spinner } from "./Spinner.js";
import {Nopage} from './Nopage.js'
import { getUser } from "../services/requestservice.js";

export const Profile = () =>{
    const {userId} = useParams()
    const user = getUser()
    const [usercards, setCards] = useState({});
    const [boolspinner,setboolspinner] = useState(true)


    useEffect(()=> {request.get(`http://localhost:4000/profile/${userId}`).then((data)=> {setCards(data);setboolspinner(false)})},[userId])
    console.log(userId)

    return (
       <>
       
        {
            user? <>
            <p className="profileh1">Welcome, {usercards?.email}</p>
            
    
            <div className="profilediv">
            <img className="profileimg" src={usercards?.picture} alt="nothing"/>
            <ul className="profileul">
            {boolspinner && <Spinner/>}
                
                <Link className="profileLink" to={`/profile/${usercards?.userId}/settings`}>Profile Settings</Link>
                <Link className="profileLink" to={`/profile/${usercards?.userId}/offers`}>Your Offers</Link>
            </ul>
            </div>
            </>
            
            :
            <Nopage/>
        
        
        }
        </>
    )
}


