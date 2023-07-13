import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getDetails } from "../services/authservice";

export const Details = () =>{
    
    
    const [currentDetails , setCurrentDetails] = useState({})
    const {id} = useParams() 
    useEffect(()=> {getDetails(id).then(data=> setCurrentDetails(data))},[])
     
    console.log(currentDetails)


    
    return(
        <div className="maindetails">
            <div className="detailsDiv">
                <img className="offerimg" src={currentDetails.offer?.picture} alt="nothing"/>
                
                
                
                <div className="descdiv">
                    <h1 id="desch4" >Offer:{currentDetails?.offer?.offername}</h1>
                    <p id="offertype" >Type:{currentDetails?.offer?.type} </p>
                    <p id="location" >Location: {currentDetails?.offer?.location}</p>
                    <p id="typedesc" >Price: {currentDetails.offer?.price}</p>
                    



                    <h1 id="offerdescription">Description:{currentDetails.offer?.description}</h1>
                    
                    <div className="descriptionDiv">
                    <p id="detailsdesc"></p>
                    
                    
                    </div>

                

                </div>

            
            </div>
        </div>
    )
}