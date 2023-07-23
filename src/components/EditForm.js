import { useContext } from 'react'
import * as request from '../services/authservice.js'
import { authContext } from '../contexts/authcontext.js'


export const EditForm = (props) =>{
    const { setIsClicked , user, setUser} = props
    const {setauthenticate} = useContext(authContext)

    const setIsCLickedFalse = () =>{
        setIsClicked(false)
    }


    const onsubmit = (e) =>{
        e.preventDefault()
        const {picture, password } = Object.fromEntries(new FormData(e.target))
        request.edit(user.email,picture, password).then((data)=> {setUser(data);setauthenticate(data);console.log(data)})
    }


    return(
        <div>

        <form id="edit" onSubmit={onsubmit}>
            
            <div  className="formdivedit">
            <button className="closebutton" onClick={setIsCLickedFalse}>Close</button>
                <h1>Edit</h1>
                {/* <label htmlFor="email">Email:</label>
                <input className="buttons"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Nudash@abv.bg"
                    defaultValue= {user.email}
                /> */}

                <label htmlFor="profilepicture">Profile Picture:</label>
                <input className="buttons" type="picture" name="picture" id="picture" defaultValue ={user.picture} placeholder='Select your profile picture'/>


                <label htmlFor="pass">Password:</label>
                <input className="buttons" type="password" name="password" id="register-password" defaultValue={user.password} placeholder='Enter a new password'/>

                
                <label htmlFor="con-pass">Confirm Password:</label>
                <input className="buttons" type="password" name="repass" id="repass" placeholder='Enter a new password'/>
                
                <input type="submit" value="Edit" />


            </div>
        </form>

        </div>
    )
}