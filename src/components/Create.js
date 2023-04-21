import { create } from "../services/authservice";

export const Create = () =>{
    const onsubmit =(event) =>{
        event.preventDefault();
        const { offername ,location, type, price, picture , description} = Object.fromEntries(new FormData(event.target));
        create(offername ,location, type, price, picture , description).then((data)=> console.log(data));
    }
    
    
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
                <input className="buttons" type="location" name="location" id="location" placeholder='Location'/>

                
                <label htmlFor="type">Type:</label>
                <input className="buttons" type="type" name="type" id="type" placeholder='Item type'/>

                <label htmlFor="price">Price:</label>
                <input className="buttons" type="price" name="price" id="price" placeholder='Price'/>
                
                <label htmlFor="picture">Picture:</label>
                <input className="buttons" type="picture" name="picture" id="picture" placeholder='Picture of the item'/>
                
                
                <label htmlFor="description">Description</label>
                <textarea style={{ resize: "none", width:200, height:50 }} name="description" id="description" placeholder="Describe your offer..." maxLength="330"/>
               
                <input style={{ "marginTop": 10 }} type="submit" value="Create" />

            </div>
        </form>

        </div>
        )
}