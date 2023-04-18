export const get = async (url) =>{
    try{
        const data = await fetch(url);
        const processeddata = await data.json()
        console.log(processeddata)
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

