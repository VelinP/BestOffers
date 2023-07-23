import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getDetails } from "../services/authservice";
import { useNavigate } from 'react-router-dom'
import * as auth from '../services/authservice.js'
import { Link } from "react-router-dom";

export const Details = () =>{
    const [currentDetails , setCurrentDetails] = useState({})
    const {id} = useParams() 
    useEffect(()=> {getDetails(id).then(data=> setCurrentDetails(data))},[])
 

    
    return(
        <div className="maindetails">
            <div className="detailsDiv">
                <img className="offerimg" src={currentDetails.offer?.picture} alt="nothing"/>
                
                
                
                <div className="descdiv">
                    <div className="descbuttonsdiv">
                        <button>Edit</button>
                        <Link to={`http://localhost:4000/offers/${id}/details/delete`}><button>Delete</button></Link>
                        
                    </div>
                    <h1 style={{justifyContent:"center", display:"flex"}}>{currentDetails?.offer?.offername}</h1>

                    <p id="offertype"  >Type: {currentDetails?.offer?.type} </p>
                    <p id="location" >Location: {currentDetails?.offer?.location}</p>
                    <p id="typedesc" >Price: {currentDetails.offer?.price}</p>
                    



                    <h1 id="offerdescription">Description:</h1>
                    <p>{currentDetails.offer?.description}</p>
                    
                    <div className="descriptionDiv">
                    <p id="detailsdesc"></p>
                    
                    
                    </div>

                

                </div>

            
            </div>
        </div>
    )
}