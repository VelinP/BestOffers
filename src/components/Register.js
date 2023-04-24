import * as request from '../services/authservice.js'
import { useNavigate } from 'react-router-dom'


export const Register = () =>{
    const navigate = useNavigate()
    
    const onsubmit = (e) =>{
        
        e.preventDefault()
        const { email ,picture, password } = Object.fromEntries(new FormData(e.target))
        request.register(email,picture, password).then(()=> {navigate('/')})


    }


    return(
        <div>

        <form id="register" onSubmit={onsubmit}>
            <div  className="formdiv">
                <h1>Register</h1>
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
                
                
                <input className="submitbutton" type="submit" value="Register" />

                <p className="field">
                    <span>
                    If you have profile click <a className="spanremove"  href="/login">here</a>
                    </span>
                </p>
            </div>
        </form>

        </div>
    )
}