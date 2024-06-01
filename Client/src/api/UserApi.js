import axios from "axios";
import { useEffect, useState } from "react";

const UserApi = ( token ) => {
  const [isLogged, setisLogged] = useState(false);
  const [isAdmin, setisAdmin] = useState(false);
  const [cart, setcart] = useState([]);

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const res = await axios.get("/user/infor", {
            headers: { Authorization: token },
          });
          setisLogged(true);
          res.data.role===1 ? setisAdmin(true) :setisAdmin(false);
        //   console.log(res);
        } catch (err) {
          alert(err.response.data.msg);
        }
      };
      getUser();
    }
  }, [token]);

  const addCart= (product)=>{
    if(!isLogged) return alert("Please Login")
    const check=cart.every(item=>{
    return item._id!==product._id;
})
if(check){
  setcart([...cart,{...product,quantity:1}])
}else{
  alert("This Product is alredy in cart")
}
}
  return {
    isLogged: [isLogged, setisLogged],
    isAdmin: [isAdmin, setisAdmin],
    cart:[cart,setcart],
    addCart:addCart
  };
};

export default UserApi;
