const Users = require("../model/userModel");

const authAdmin= async (req,res,next)=>{
    // console.log(req);
    try {
        const user=await Users.findOne({
            _id:req.user.id
        })
        if(user.role===0){
            return res.status(400).json({msg:"Admin Resourses Access Denied"})
        }
        next();
    } catch (err) {
        return res.status(500).json({msg:err.message})
    }
}

module.exports=authAdmin