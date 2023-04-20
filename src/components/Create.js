export const Create = () =>{
    return( 
    
    <div>

        <form id="create" onSubmit={onsubmit}>
            <div  className="formdiv">
                <h1>Create an Offer</h1>
                <label htmlFor="offername">Offer Name:</label>
                <input className="buttons"
                    type="offername"
                    id="offername"
                    name="offername"
                    placeholder="Name of the Offer"
                />

                
                <label htmlFor="location">Location:</label>
                <input className="buttons" type="location" name="location" id="location" placeholder='Where would you like to go?'/>

                <label htmlFor="price">Price:</label>
                <input className="buttons" type="price" name="price" id="price" placeholder='Price'/>
                
                
                <input className="submitbutton" type="submit" value="Create" />

            </div>
        </form>

        </div>)
}