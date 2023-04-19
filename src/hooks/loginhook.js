import { useState } from "react";

export const useLocalStorage = (key,defaultvalue) =>{
    const [value , setValue] = useState(defaultvalue)

    const setLocalStorageValue = (newValue) =>{
        localStorage.setItem(key , JSON.stringify(newValue))
        setValue(newValue)
    }

    return[value, setLocalStorageValue]
}