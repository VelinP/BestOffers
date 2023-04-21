export const get = async (url) =>{
    try{
        const data = await fetch(url);
        const processeddata = await data.json()
        return processeddata

    }catch(e){
        console.log("Server is probably offline")
    }
}

export const post = async(url,data ) =>{
    try{
        const readydata = await fetch(url, {method:'POST', headers:{'Content-Type': "application/json"}, body: JSON.stringify(data)})
        return readydata.json()
    }
    catch(e){
        console.log(e.message)
    }
}

export const getUser = () =>{
    let serializeduser = localStorage.getItem('auth')

    if(serializeduser){
        let user = JSON.parse(serializeduser)
        return user
    }

}

export const GetToken = ()=>{
    return getUser()?.accessToken
}

export const postauth = async(url,data ) =>{
    let token = GetToken()
    const readydata = await fetch(url, {method:'POST', headers:{'Content-Type': "application/json", 'X-Authorization': token}, body: JSON.stringify(data)})
    return readydata.json()

}
