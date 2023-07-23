import { Link } from "react-router-dom"

export const AlloffersRow = (props) =>{
    console.log(props.info)
    
    return(
        <div className="alloffersrowmaindiv">
                
        <Link to={`/offers/${props.info._id}/details`} ><img  src={props.info.picture} alt="quest" /></Link>
         
         <div className="alloffersrowdetailsdiv">
            <h4>Offer: {props.info.offername} </h4>
            <p>Price: {props.info.price}</p>
        </div>
         </div>
     )

    
}