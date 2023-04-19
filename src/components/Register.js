import * as authservice from '../services/authservice.js'

export const Register = () =>{
    const onsubmit = (e) =>{
        e.preventDefault()
        const { email ,picture, password } = Object.fromEntries(new FormData(e.target))
        debugger;
        console.log(email,picture,password)
        authservice.register(email,picture, password).then((content)=> console.log(content))

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
                    If you already have profile click <a className="spanremove"  href="/register">here</a>
                    </span>
                </p>
            </div>
        </form>

        </div>
    )
}