import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DeleteProd = () => {
    const params=useParams();
    const paramsID=params.id;
    try {
        const deleteProducts= async (paramsID)=>{
            console.log(paramsID);
            await axios.delete(`/api/products/${paramsID}`)
        }
        deleteProducts(paramsID);
        window.location.href="/"
        
    } catch (err) {
        throw err;
    }
};

export default DeleteProd;
