import * as request from '../services/requestservice.js'
import { useEffect , useState } from 'react'
import { HomeComp } from './Homecompo.js'
import { Spinner } from './Spinner.js'
import { Card } from './Card.js'
import { Link } from 'react-router-dom'
import { Footer } from './Footer.js'
import { UserReview } from './UserReview.js'

export const Main = () =>{
    const [three, setThree] = useState([])
    const [boolspinner,setboolspinner] = useState(true)
    const [offersnumber , setoffersnumber] = useState(false)

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
              
              
          </div>

      </div>

      <div className='entryabout'>
        


        <div className='websiteabout'>
          
                  <h1>About BestOffers</h1>
                  <div>Here on BestOffers our goal is to bring an easy and relaxing experience when it comes to buying / selling items.
                  <div> You can register , login , customzie your profile , look at all offers ,and your own specific offers.</div>
                  <div> This website is designed entirely by Velin Porchev of Softuni , and it's intended goal is to represent what i am capable of at my current level.</div>
                  <h1>Why choose us?</h1>
                  <div>BestOffers gives you the chance to easily and safely browse offers posted by others.</div>
                  <div>It is a great way to find what you need, at an affordable price.</div>
                  <div>Don't hesitate, join us now!</div>

                  <div className='alloffersmain'>
                      <Link to={'/alloffers'}>Check out our offers</Link>
                      <Link to={'/register'}>Join us</Link>

                </div>


              <div className='circlediv'>
                  {
                  
                  offersnumber 
                  ? <h1>{offersnumber?.alloffers?.length}</h1>
                  :
                  <h1>0</h1>
                  
                  }
                  offer/s currently available.
              </div>
              
              
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
      
      {/* <div className='threeholderdiv'>
        <h1 className='mainheader'>User reviews</h1>
      </div> */}

      {/* <div className='userreviewsdiv'>
              
          <div className="userreview">
              <div className="userreeviewpicture">picture</div>
              
              <div className="userreviewtext">I really enjoyed using this website a while ago</div>
            
          </div>
          
          <div className="userreview">
              <div className="userreeviewpicture1">picture</div>
              
              <div className="userreviewtext1">text</div>
            
          </div>

        
            
        
      </div> */}

      <Footer/>
      </>
      
    )
}




