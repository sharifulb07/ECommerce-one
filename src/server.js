const express=require('express');
const morgan=require('morgan');


const app=express();



app.use(morgan("dev"));


app.get('/products', (req,res)=>{

    res.status(200).send({
        message:"Products are returned ",
    });
})
app.get('/', (req,res)=>{

    res.status(200).send({
        message:"Welcome to the server ",
    });
})
app.get('/test', (req,res)=>{

    res.status(200).send({
        message:"api is working fine  ",
    });
})

app.listen(3001, ()=>{
    console.log('server is running at http://localhost:3001');
})