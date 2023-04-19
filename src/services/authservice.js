import * as request from './requestservice.js'

export const register = async(email,picture, password) =>{
    try{
        return request.post("http://localhost:4000/register", {email,picture, password})

    }catch(err){
        console.log(err);
    }
}

