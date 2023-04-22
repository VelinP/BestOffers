import { Outlet, Navigate } from "react-router-dom";
import { getUser } from "../services/requestservice";

export const PrivateRoute = () =>{
    const user = getUser()

    return(
        user ? <Outlet/> : <Navigate to="/404"/>

    )
}