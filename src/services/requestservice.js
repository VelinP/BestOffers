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