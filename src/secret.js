require('dotenv').config();

const sereverPort=process.env.SERVER_PORT || 3004;
module.exports={sereverPort};