import { useNavigate } from "react-router-dom";
import { Footer } from './Footer.js'

export const Contactus = () =>{
    const navigate = useNavigate()


    const onsubmit =(event) =>{
        event.preventDefault();
        navigate('/success')
    }
    
    
    return( 
    <div className="maincontactdiv">


            <div className="contactinfodiv">
            
                <h2>Work time:</h2>
                <h1>Monday - Friday 10:00 - 19:00</h1>
                <h1>Saturday - Sunday - 19:00</h1>

            </div>
    
    
    
    <div className="createcontactinfodiv">
       

            
   
    <div className="contactusmaindiv">
            
            <form id="create" onSubmit={onsubmit}>
                <div  className="contactformdiv">
                    
                    <h1>Contact Us</h1>

                
                    
                    <label htmlFor="picture">Topic:</label>
                    <input className="contactformdivcontainer" type="picture" name="picture" id="picture" placeholder='Picture of the item'/>
                    
                    <label htmlFor="picture">Email:</label>
                    <input className="contactformdivcontainer" type="picture" name="picture" id="picture" placeholder='Picture of the item'/>
                    
                    <label htmlFor="description">Description</label>
                    <textarea className="contactformdivcontainer" style={{ resize: "none", width:600, height:100 }} name="description" id="description" placeholder="Describe your offer..." maxLength="330"/>
                
                    <input style={{ "marginTop": 10 }} type="submit" value="Create" />

                </div>
            </form>

        </div>

    </div>
    </div>
        )
}