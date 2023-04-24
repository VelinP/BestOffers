
export const EditForm = (props) =>{
    console.log(props)
    const { setIsClicked } = props

    const setIsCLickedFalse = () =>{
        setIsClicked(false)
    }

    return(
        <div>

        <form id="register" onSubmit={onsubmit}>
            <div  className="formdivedit">
                <h1>Edit</h1>
                <label htmlFor="email">Email:</label>
                <input className="buttons"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Nudash@abv.bg"
                />

                <label htmlFor="profilepicture">Profile Picture:</label>
                <input className="buttons" type="picture" name="picture" id="picture" placeholder='Select your profile picture'/>


                <label htmlFor="pass">Password:</label>
                <input className="buttons" type="password" name="password" id="register-password" placeholder='Password'/>

                
                <label htmlFor="con-pass">Confirm Password:</label>
                <input className="buttons" type="password" name="repass" id="repass" placeholder='Password'/>
                
                <button onClick={setIsCLickedFalse}>X</button>
            </div>
        </form>

        </div>

    )
}