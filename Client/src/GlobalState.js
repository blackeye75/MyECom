import { createContext, useEffect, useState } from "react";
import ProductAPI from "./api/ProductAPI";
import axios from "axios";
import UserApi from "./api/UserApi";

export const GlobalState=createContext();

export const DataProvider=({children})=>{
    const [token, settoken] = useState(false);

    const refreshToken= async ()=>{
        const res=await axios.get('/user/refresh_token')
        settoken(res.data.accesstoken)
    }

    useEffect(()=>{
        const firstLogin=localStorage.getItem('firstLogin')
        if(firstLogin) refreshToken()
        
    },[])
    const state={
        token:[token,settoken],
        productAPI:ProductAPI(),
        UserApi:UserApi(token)
    }
    // console.log(state);
    // ProductAPI()
    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}