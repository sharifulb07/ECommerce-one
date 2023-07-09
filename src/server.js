const express = require("express");
const morgan = require("morgan");
const bodyParser=require("body-parser");

const app = express();

const isLoggedIn = (req, res, next) => {
  const login = true;
if(login){
console.log('please login first here ');

    next();
}else{
    return res.status(401).json({message:'please login first'});
}
};

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));

app.get("/api/user",  (req, res) => {
 

  res.status(200).send({
    message: "User Profile is returned here ",
  });
});

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
app.get("/test", (req, res) => {
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
    res.status(404).json({message:'route is not found'});
    nex();
})

// server error checking
app.use((req,res,nex)=>{
    console.log(error.status)
    res.status(404).json({message:'something gone wrong'})
})



app.listen(3001, () => {
  console.log("server is running at http://localhost:3001");
});
