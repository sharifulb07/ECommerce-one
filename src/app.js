const express = require("express");
const morgan = require("morgan");
const bodyParser=require("body-parser");

const xssClean=require('xss-clean');

const rateLimit = require('express-rate-limit');
const userRouter = require("./routers/userRouter");

const app = express();




const rateLimiter=rateLimit({
    windowMs:1*60*1000, // 1 minute converting 
    max:5,
    message:'Too many requests fro thi IP. please try again later'
})


const isLoggedIn = (req, res, next) => {
  const login = true;
if(login){
console.log('please login first here ');

    next();
}else{
    return res.status(401).json({message:'please login first'});
}
};


app.use(rateLimiter);
app.use(xssClean());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));



app.use("/api/users", userRouter);






app.get("/products", (req, res) => {
  res.status(200).send({
    message: "Products are returned ",
  });
});
app.get("/", (req, res) => {
  res.status(200).send({
    message: "Welcome to the server ",
  });
});
app.get("/test1", rateLimiter, (req, res) => {

    console.log(rateLimiter.message)
  res.status(200).send({
    message: "api Testing is working fine  ",
  });
});
app.post("/test", (req, res) => {
  res.status(200).send({
    message: "Post Method(Api Testing is working fine)  ",
  });
});
app.put("/test", (req, res) => {
  res.status(200).send({
    message: "Put Method(Api Testing is working fine)  ",
  });
});
app.delete("/test", (req, res) => {
  res.status(200).send({
    message: "Delete Method(Api Testing is working fine)  ",
  });
});


// client error cheching 

app.use((req,res,nex)=>{
    
   
    nex( createError(404,'route is not found '));
})

// server error checking- all the error comes here 
app.use((err, req,res,nex)=>{
    
    return res.status(err.status || 500).json({
        success:false,
        message:err.message,
    });
})


module.exports=app;
