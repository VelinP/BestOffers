import * as auth from '../services/authservice.js'
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export const Delete = () =>{
    const {id} = useParams()
    const navigate = useNavigate();

    
    useEffect(()=>{auth.deleteOne(id).then(()=> navigate('/'))})
    return(null)
}