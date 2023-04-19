import * as request from '../services/authservice.js'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { authContext } from '../contexts/authcontext'

export const Login = () =>{
    const navigate = useNavigate()
    const { loginfunc } = useContext(authContext)



    const onsubmit = (e)=>{
        e.preventDefault()
        const { email, password } = Object.fromEntries(new FormData(e.target))
        request.login(email,password).then((data)=> {loginfunc(data);navigate('/')})
    }
    
    
    return(
        <div>

        <form id="login" onSubmit={onsubmit}>
            <div  className="formdiv">
                <h1>Login</h1>
                <label htmlFor="email">Email:</label>
                <input className="buttons"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Nudash@abv.bg"
                />

                
                <label htmlFor="pass">Password:</label>
                <input className="buttons" type="password" name="password" id="register-password" placeholder='Password'/>
                
                <input className="submitbutton" type="submit" value="Login" />

                <p className="field">
                    <span>
                    If you dont have profile click <a className="spanremove"  href="/register">here</a>
                    </span>
                </p>
            </div>
        </form>

        </div>


    )
}