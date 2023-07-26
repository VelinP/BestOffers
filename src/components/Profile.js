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
        
        
    <div className="profilewrapper">
        <div className="profilediv">
            
            <div className="imagediv">
                <img className="profileimg" src={usercards?.picture} alt="nothing"/>
            </div>

            <div className="infodiv">

                <div>
                
                {boolspinner && <Spinner/>}
                {isClicked 
                    ?
                    <EditForm user = {user} setUser={setCards} setIsClicked={setisClicked} />
                    :
                    <>
                    <p className="profileh1">{usercards?.email}</p>
                    <div className="buttonsdiv">
                    <Link className="profileLink" to={`/profile/${usercards.email}/offers`}>Your offers</Link>
                    <button className="profileLink" onClick={editClick}>Edit Profile</button>
                    </div>
                    </>
                }
                </div>

            </div>    
        </div>
    </div>
    )
}



