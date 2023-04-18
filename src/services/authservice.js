import * as request from './requestservice.js'

export const register = async(email, password) =>{
    try{
        debugger;
        return request.post("http://localhost:4000/register", {email,password})

    }catch(err){
        console.log(err);
    }
}

