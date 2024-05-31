import axios from "axios";
import { useEffect, useState } from "react";

const UserApi = ( token ) => {
  const [isLogged, setisLogged] = useState(false);
  const [isAdmin, setisAdmin] = useState(false);

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
  return {
    isLogged: [isLogged, setisLogged],
    isAdmin: [isAdmin, setisAdmin],
  };
};

export default UserApi;
