const Users = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const userCtrl = {
  register: async (req, res) => {
    // console.log(req.body);
    try {
      const { email, name, password } = req.body;
      const user = await Users.findOne({ email });
      if (user) return res.status(400).json({ msg: "Email alredy Registered" });
      if (password.length < 6)
        return res
          .status(400)
          .json({ msg: "Password Should be of atleast 6 characters" });

      //   password encryption
      const passwordHash = await bcrypt.hash(password, 10);
      //   console.log(passwordHash);

      const newUser = new Users({
        name,
        email,
        password: passwordHash,
      });

      //save mongoDb
      await newUser.save();

      //create jwt  to authenticate

      const accesstoken = createAccessToken({ id: newUser._id });
      const refreshtoken = createRefreshtoken({ id: newUser._id });

      res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
        path: "/user/refresh_token",
      });

      res.json({ accesstoken });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  refreshtoken: async (req, res) => {
    try {
        const rf_token = req.cookies.refreshtoken;
        if (!rf_token)
          return res.status(400).json({ msg: "Please Login Or register" });
        jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
          if (err) return res.status(400).json({ msg: "please Login or Register" });
          const accesstoken=createAccessToken({id:user.id})
          res.json({ user,accesstoken });  
        });
    } catch (err) {
        return res.status(500).json({msg:err.message})
    }
    
  },
  login:async (req,res)=>{
    try {
        const {email,password}=req.body;
        const user =await Users.findOne({email});
        if(!user) return res.status(400).json({msg:"User Dosen't exists"})
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch) return res.status(400).json({msg:"Incorrect password"})

        const accesstoken=createAccessToken({id:user._id});
        const refreshtoken=createRefreshtoken({id:user._id});
        res.cookie('refreshtoken',refreshtoken,{
            httpOnly:true,
            path:'/user/refresh_token'
        })
        res.json({accesstoken})

    } catch (err) {
        return res.status(500).json({msg:err.message})
    }
  },
  logout:async (req,res)=>{
    try {
        res.clearCookie('refreshtoken',{path:'/user/refresh_token'})
        return res.json({msg:"LogOut"})
    } catch (err) {
        
    }
  },
  getUser:async (req,res)=>{
    try {
        const user=await Users.findById(req.user.id).select('-password')
        if(!user) return res.status(400).json({msg:"User not found"})
        res.json(user)
    } catch (err) {
        
    }
  }
};

const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};
const createRefreshtoken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};

module.exports = userCtrl;
