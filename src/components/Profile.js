import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as request from '../services/requestservice.js'
import { Link } from "react-router-dom";
import { Spinner } from "./Spinner.js";
import { getUser } from "../services/requestservice.js";
import { EditForm } from "./EditForm.js";

export const Profile = () =>{
    const {useremail} = useParams()
    const user = getUser()

    const [usercards, setCards] = useState({});
    const [boolspinner,setboolspinner] = useState(true);
    const [isClicked, setisClicked] = useState(false)
    
    const editClick = ()=>{
        setisClicked(true)
    }


    useEffect(()=> {request.get(`http://localhost:4000/profile/${useremail}`).then((data)=> {setCards(data);setboolspinner(false)})},[useremail])

    return (
        <>
        
        

        <div className="profilediv">
        <img className="profileimg" src={usercards?.picture} alt="nothing"/>
        
        <ul className="profileul">
        <p className="profileh1">{usercards?.email}</p>
        {boolspinner && <Spinner/>}
        {isClicked 
            ?
            <EditForm user = {user} setIsClicked={setisClicked} />
            :
            <>
            <Link className="profileLink" to={`/profile/${usercards.email}/offers`}>Your offers</Link>
            <button className="profileLink" onClick={editClick}>Edit Profile</button>
            </>
            }

             
            
        </ul>
        </div>
        </>
    )
}



