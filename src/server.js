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
        message:"api Testing is working fine  ",
    });
})
app.post('/test', (req,res)=>{

    res.status(200).send({
        message:"Post Method(Api Testing is working fine)  ",
    });
})
app.put('/test', (req,res)=>{

    res.status(200).send({
        message:"Put Method(Api Testing is working fine)  ",
    });
})
app.delete('/test', (req,res)=>{

    res.status(200).send({
        message:"Delete Method(Api Testing is working fine)  ",
    });
})

app.listen(3001, ()=>{
    console.log('server is running at http://localhost:3001');
})