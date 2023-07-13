import * as request from './requestservice.js'

export const register = async(email,picture, password) =>{
    try{
        return request.post("http://localhost:4000/register", {email,picture, password})

    }catch(err){
        console.log(err);
    }
}

export const login = async(email , password) =>{
    try{
        return request.post("http://localhost:4000/login", {email,password})
    }catch(e){
        console.log(e.message)
    }
}


export const create = async(offername ,location, type, price, picture , description, id)=>{
    try{
        return request.postauth("http://localhost:4000/create", {offername ,location, type, price, picture , description, id})
    }catch(e){
        console.log(e.message)
    }
}

export const logout = async()=>{
    try{
        const token = request.GetToken()
        const data = await fetch('http://localhost:4000/logout/', {headers:{'X-Authorization': token}})
        return data
    }
    catch(err){
        console.log(err)
    }
    
}

export const edit = async (email, picture, password,id) =>{
    try{
        return request.put(`http://localhost:4000/profile/${email}/edit`, {picture, password, id})

    }catch(e){
        console.log(e)

}
}

export const getDetails = async (id) =>{
    try{
        return request.get(`http://localhost:4000/offers/${id}/details`, id)
        
    }catch(e){
        console.log(e)
    }
    
}