const mongoose=require('mongoose');
const { MongoDB_Server } = require('../secret');




const connectDatabase=async(options={})=>{
  

  try {
    await mongoose.connect(MongoDB_Server, options);
   
    console.log("Connection to DB is established Successfully heare ");

    mongoose.connection.on('error',(error)=>{
      console.error("Error is : ", error);
    })

  } catch (error) {
 console.log(MongoDB_Server)
    console.error('Connect is not possible');
    
  }
}



module.exports=connectDatabase;