export const get = async (url) =>{
    try{
        const data = await fetch(url);
        const processeddata = await data.json()
        return processeddata

    }catch(e){
        console.log("Server is probably offline")
    }
}

export const getthree = async (url) =>{
    const data = await get("http://localhost:4000/alloffers");
    const spliceddata = data.alloffers.splice(-3)
    return spliceddata
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

export const put = async(url,data) =>{
    let token = GetToken()
    const readydata = await fetch(url, {method:'PUT', headers:{'Content-Type': "application/json", 'X-Authorization': token}, body: JSON.stringify(data)})
    return readydata.json()
}

export const deletefunc = async(url) =>{
    const user = getUser()
    const token = user?.token
    debugger;
    const readydata = await fetch(url, {method:'DELETE', headers:{'Content-Type': "application/json", 'X-Authorization': token}})
    return readydata.json()
}