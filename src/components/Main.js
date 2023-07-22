import * as request from '../services/requestservice.js'
import { useEffect , useState } from 'react'
import { HomeComp } from './Homecompo.js'
import { Spinner } from './Spinner.js'
import { Card } from './Card.js'
import { Link } from 'react-router-dom'
import { Footer } from './Footer.js'

export const Main = () =>{
    const [three, setThree] = useState([])
    const [boolspinner,setboolspinner] = useState(true)
    const [offersnumber , setoffersnumber] = useState(0)

    useEffect(()=> {request.getthree("http://localhost:4000/alloffers").then((data) => {setThree(data)})},[])
    useEffect(()=> {request.get("http://localhost:4000/alloffers").then((data) => {setoffersnumber(data)})},[])
    

    return(
      <>
      <div className='entry'>

        <div className='entryinfodiv'>
            <h1>Welcome to BestOffers</h1>
            <p>Need something new , or want to sell something? Look no further!
              Here on BestOffers , we have all sorts of offers and items on sale.
            </p>
            
            <div className='alloffersmain'>
            <Link to={'/alloffers'}>Check out our offers</Link>
            <Link to={'/register'}>Join us</Link>

            </div>
        </div>

      </div>

      <div className='entryabout'>
        
        <div className='websiteabout'>
          
          <h1>About BestOffers</h1>
          <div>Here on BestOffers our goal is to bring an easy and relaxing experience when it comes to buying / selling items.
          <div> You can register , login , customzie your profile , look at all offers ,and your own specific offers.</div>
          <div> This website is designed entirely by Velin Porchev of Softuni , and it's intended goal is to represent what i am capable of at my current level.</div>
          </div>

          <div className='circlediv'>
            <h1>{offersnumber.alloffers?.length}</h1>
            offer/s currently available.
          </div>
        </div>


      </div>

      <div className='threeholderdiv'>
      {three.length > 0 ? <h1 className='mainheader'>Most Recent Offers</h1> : <h1>No offers currently</h1>}

      </div>

      <div className='newestthree'>
          
        <div className='homediv'>
          <div className='homecarddiv'>
            {three.length>0 ? three?.map( item => <Card info = {item}key ={item._id}/>) : <></>}
        </div>

     </div> 

      </div>
      <Footer/>
      </>
      
    )
}








{/* <>
<div className="maincontentdiv">
  
  <ul className='mainuls'>
  {boolspinner && <Spinner/>}

  {users?.length >0 ? users.map(item => <HomeComp email={item.email} key ={item._id}/>) : "No content 😢"}
  </ul>
</div>
</> */}

// useEffect(()=> 
// {
//     request.get("http://localhost:4000").then((info)=> {setUsers(info);setboolspinner(false)})},[])
        

//old

{/* <div className='homediv'>
        <h1 className='mainheader'>Latest offers</h1>
        <div className='homecarddiv'>
            {three.length>0 ? three?.map( item => <Card info = {item}key ={item._id}/>) : <h1>There are no offers currently</h1>}
        </div>

     </div> */}