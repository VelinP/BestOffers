import { Link } from "react-router-dom"

export const Card = (props) =>{
    return(

        
    <div className="homepagecardheader">
        <Link to={`/offers/${props.info._id}/details`} ><img className="homepagecardimg" src={props.info.picture} alt='nothing'></img></Link>
        <div className="homepagecardbody">
            <h1 style={{justifyContent:"center", display:"flex"}}>{props.info.offername} </h1>
        </div>
        

    </div>


    )
}


