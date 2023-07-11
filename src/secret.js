require('dotenv').config();


const sereverPort=process.env.SERVER_PORT || 3004;
const MongoDB_Server=process.env.MONGODB_SERVER_URL ;
const profile_img=process.env.PROFILE_IMG || 'public/images/Users/pro.jpg';



module.exports={sereverPort,profile_img, MongoDB_Server};