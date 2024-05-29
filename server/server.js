const express = require('express');
const cors=require('cors')
const  mongoose = require('mongoose');
require('dotenv').config();
const userRoute=require("./routes/userRouter")
const cookieParser=require('cookie-parser');
const fileUpload = require('express-fileupload')
const app=express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles:true
}))

const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.json({"msg":"Hello piju"})
})

app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING ON PORT ${PORT} `);
})


//routes
app.use('/user',userRoute);
app.use('/api',require('./routes/categoryRouter'));
app.use('/api',require('./routes/upload'))
app.use('/api',require('./routes/productRouter'));



//connect mongoDB
const URI=process.env.MONGODB_URL;
mongoose.connect(URI,{
    // useCreateIndex:true,
    // useFindAndModify:false,
    // useNewUrlParser:true,
    // useUnifiedTopology:true,
}).then(()=>{
    console.log("MongoDb Connected");
}).catch(err=>{
    console.log(err);
})