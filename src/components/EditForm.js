
export const EditForm = (props) =>{
    console.log(props)
    const { setIsClicked ,user , id} = props

    const setIsCLickedFalse = () =>{
        setIsClicked(false)
    }

    const onsubmit = (e)=>{
        e.preventDefault()
        console.log('submitted')
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
                    defaultValue= {user.email}
                />

                <label htmlFor="profilepicture">Profile Picture:</label>
                <input className="buttons" type="picture" name="picture" id="picture" defaultValue ={user.picture} placeholder='Select your profile picture'/>


                <label htmlFor="pass">Password:</label>
                <input className="buttons" type="password" name="password" id="register-password" defaultValue={user.password} placeholder='Enter a new password'/>

                
                <label htmlFor="con-pass">Confirm Password:</label>
                <input className="buttons" type="password" name="repass" id="repass" placeholder='Enter a new password'/>
                
                <button onClick={setIsCLickedFalse}>X</button>
                <button onClick={onsubmit}>Edit</button>

            </div>
        </form>

        </div>

    )
}