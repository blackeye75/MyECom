import React,{useContext} from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalState } from "../../../../GlobalState";
import axios from "axios";

const BtnRender = ({product}) => {

  const state = useContext(GlobalState); 

  const [isAdmin] = state.UserApi.isAdmin;
  const addCart=state.UserApi.addCart;
  // console.log(state);


 
  
  return (
    <div className="row_btn">
      {isAdmin ? (
        <>
          <Link id="btn_buy" to={`delete/${product._id}`} >
            Delete
          </Link>
          <Link id="btn_view" to={`detail/${product._id}`}  >
            Edit
          </Link>
        </>
      ) : (
        <>
          <Link
            id="btn_buy"
            to={`#!`}
            onClick={() => {
              addCart(product);
            }}
          >
            Buy
          </Link>
          <Link id="btn_view" to={`detail/${product._id}`}>
            View
          </Link>
        </>
      )}
    </div>
  );
};

export default BtnRender;
