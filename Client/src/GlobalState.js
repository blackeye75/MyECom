import { createContext, useState } from "react";
import ProductAPI from "./api/ProductAPI";

export const GlobalState=createContext();

export const DataProvider=({children})=>{
    const [token, settoken] = useState(false);
    const state={
        token:[token,settoken],
        productAPI:ProductAPI()
    }
    // console.log(state);
    // ProductAPI()
    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}