const createError=require('http-errors');
const { users } = require('../models/userModels');



const getUsers=(req, res, next) => {
 
try{
    res.status(200).send({
        message: "Users were  returned",
        users:users,
      });

}catch(error){
    next(createError(404,error));
}


   
  }


  module.exports={getUsers}